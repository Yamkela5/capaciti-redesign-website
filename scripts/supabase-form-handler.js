// Ensure Supabase is initialized
const supabase = window.SUPABASE_CONFIG
  ? window.supabase.createClient(window.SUPABASE_CONFIG.url, window.SUPABASE_CONFIG.key)
  : null;

document.addEventListener("DOMContentLoaded", () => {
  const applyButtons = document.querySelectorAll(".program-apply");
  const modal = document.getElementById("applicationModal");
  const form = document.getElementById("applicationForm");
  const closeBtn = document.getElementById("modalClose");
  const cancelBtn = document.getElementById("formCancel");
  const successState = document.getElementById("modalSuccess");

  // Show modal and pre-select program
  applyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedProgram = button.dataset.program;
      modal.classList.add("open");
      form.classList.remove("hidden");
      successState.classList.add("hidden");
      form.program.value = selectedProgram;
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  cancelBtn.addEventListener("click", () => modal.classList.remove("open"));

  // Variable to track if submission is in progress
  let isSubmitting = false;

  // Form submit - Remove any existing listeners first
  const newForm = form.cloneNode(true);
  form.parentNode.replaceChild(newForm, form);
  
  // Add single event listener to the cloned form
  newForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event bubbling
    e.stopImmediatePropagation(); // Stop other listeners
    
    // Prevent double submission
    if (isSubmitting) {
      console.log("🛑 Submission already in progress, ignoring");
      return;
    }
    
    isSubmitting = true;
    console.log("🔍 Form submission started");

    const formData = {
      firstName: newForm.firstName.value.trim(),
      surname: newForm.surname.value.trim(),
      email: newForm.email.value.trim().toLowerCase(),
      phone: newForm.phone.value.trim(),
      program: newForm.program.value,
      experience: newForm.experience.value,
      availability: newForm.availability.value,
      motivation: newForm.motivation.value.trim()
    };

    console.log("📝 Form data:", formData);

    // Get submit button reference
    const submitBtn = document.getElementById("formSubmit");

    try {
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.querySelector(".submit-text").classList.add("hidden");
      submitBtn.querySelector(".submit-loading").classList.remove("hidden");

      // 🔍 Real-time duplicate check BEFORE submission
      console.log("🔍 Checking for duplicates...");
      const isDuplicate = await checkIfUserAlreadyApplied(formData.email, formData.phone);
      console.log("🔍 Duplicate check result:", isDuplicate);
      
      if (isDuplicate) {
        console.log("❌ Duplicate found - stopping submission");
        
        // Hide loading state
        submitBtn.disabled = false;
        submitBtn.querySelector(".submit-text").classList.remove("hidden");
        submitBtn.querySelector(".submit-loading").classList.add("hidden");
        
        // Reset submission flag
        isSubmitting = false;
        
        // Ensure success state is hidden
        successState.classList.add("hidden");
        newForm.classList.remove("hidden");
        
        alert("You have already submitted an application with this email or phone number.");
        return; // Stop execution here
      }

      console.log("✅ No duplicate found - proceeding with submission");

      // Proceed with submission
      const result = await submitApplicationToSupabase(formData);
      console.log("📤 Submission result:", result);

      // Hide loading state
      submitBtn.disabled = false;
      submitBtn.querySelector(".submit-text").classList.remove("hidden");
      submitBtn.querySelector(".submit-loading").classList.add("hidden");

      if (result && result.success === true) {
        console.log("✅ Submission successful - showing success modal");
        newForm.reset();
        newForm.classList.add("hidden");
        successState.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.remove("open");
          successState.classList.add("hidden");
          newForm.classList.remove("hidden");
        }, 5000);
      } else {
        console.log("❌ Submission failed:", result?.message);
        alert(result?.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("💥 Unexpected error during form submission:", error);
      
      // Hide loading state
      submitBtn.disabled = false;
      submitBtn.querySelector(".submit-text").classList.remove("hidden");
      submitBtn.querySelector(".submit-loading").classList.add("hidden");
      
      alert("An unexpected error occurred. Please try again.");
    }
    
    // Reset submission flag
    isSubmitting = false;
  });

  // Update close button references to work with cloned form
  const newCloseBtn = document.getElementById("modalClose");
  const newCancelBtn = document.getElementById("formCancel");
  
  newCloseBtn.addEventListener("click", () => modal.classList.remove("open"));
  newCancelBtn.addEventListener("click", () => modal.classList.remove("open"));
});

// ✅ Enhanced duplicate check with debugging
async function checkIfUserAlreadyApplied(email, phone) {
  console.log("🔍 checkIfUserAlreadyApplied called with:", { email, phone });
  
  if (!supabase) {
    console.log("❌ Supabase not initialized");
    return false;
  }

  try {
    console.log("🔍 Checking email:", email);
    const { data: emailMatch, error: emailError } = await supabase
      .from("candidate_applications")
      .select("id")
      .eq("email", email);
    
    if (emailError) {
      console.error("❌ Email check error:", emailError);
      return false;
    }
    
    console.log("📧 Email check result:", emailMatch);
    if (emailMatch && emailMatch.length > 0) {
      console.log("❌ Email duplicate found");
      return true;
    }

    console.log("🔍 Checking phone:", phone);
    const { data: phoneMatch, error: phoneError } = await supabase
      .from("candidate_applications")
      .select("id")
      .eq("phone", phone);
    
    if (phoneError) {
      console.error("❌ Phone check error:", phoneError);
      return false;
    }
    
    console.log("📱 Phone check result:", phoneMatch);
    if (phoneMatch && phoneMatch.length > 0) {
      console.log("❌ Phone duplicate found");
      return true;
    }

    console.log("✅ No duplicates found");
    return false;
  } catch (err) {
    console.error("💥 Error in duplicate check:", err);
    return false;
  }
}

// ✅ Enhanced submission function with debugging
async function submitApplicationToSupabase(formData) {
  console.log("📤 submitApplicationToSupabase called with:", formData);
  
  if (!supabase) {
    console.log("❌ Supabase not available");
    return {
      success: false,
      message: "Database connection not available. Please check configuration."
    };
  }

  try {
    const insertData = {
      first_name: formData.firstName,
      surname: formData.surname,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      experience: formData.experience,
      availability: formData.availability,
      motivation: formData.motivation,
      application_date: new Date().toISOString(),
      status: "pending"
    };
    
    console.log("📝 Inserting data:", insertData);

    const { data, error } = await supabase
      .from("candidate_applications")
      .insert([insertData])
      .select();

    if (error) {
      console.error("❌ Supabase insertion error:", error);
      return {
        success: false,
        message: error.message || "Error saving application."
      };
    }

    console.log("✅ Data inserted successfully:", data);
    return {
      success: true,
      data: data[0],
      message: "Application submitted successfully!"
    };
  } catch (err) {
    console.error("💥 Unexpected error in submission:", err);
    return {
      success: false,
      message: "Unexpected error occurred: " + err.message
    };
  }
}