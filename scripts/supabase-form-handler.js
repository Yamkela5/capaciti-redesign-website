// Supabase Configuration
// Configuration is loaded from supabase-config.js
let SUPABASE_URL = '';
let SUPABASE_ANON_KEY = '';

// Initialize Supabase client
let supabase = null;

// Initialize Supabase when the script loads
function initializeSupabase() {
    // Get configuration from global config
    if (window.SUPABASE_CONFIG) {
        SUPABASE_URL = window.SUPABASE_CONFIG.url;
        SUPABASE_ANON_KEY = window.SUPABASE_CONFIG.anonKey;
    }
    
    // Check if credentials are configured
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY || 
        SUPABASE_URL === 'YOUR_SUPABASE_PROJECT_URL' || 
        SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('Supabase credentials not configured. Please update supabase-config.js with your project credentials.');
        return;
    }
    
    if (typeof window.supabase !== 'undefined') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client initialized successfully');
    } else {
        console.error('Supabase library not loaded. Please check the CDN link.');
    }
}

// Form validation functions
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validateFormData(formData) {
    const errors = [];
    
    // Required fields validation
    const requiredFields = [
        { field: 'firstName', name: 'First Name' },
        { field: 'surname', name: 'Surname' },
        { field: 'email', name: 'Email' },
        { field: 'phone', name: 'Phone' },
        { field: 'program', name: 'Program' },
        { field: 'experience', name: 'Experience Level' },
        { field: 'availability', name: 'Availability' },
        { field: 'motivation', name: 'Motivation' }
    ];
    
    requiredFields.forEach(({ field, name }) => {
        if (!formData[field] || formData[field].trim() === '') {
            errors.push(`${name} is required`);
        }
    });
    
    // Email validation
    if (formData.email && !validateEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Phone validation
    if (formData.phone && !validatePhone(formData.phone)) {
        errors.push('Please enter a valid phone number');
    }
    
    // Motivation length validation
    if (formData.motivation && formData.motivation.length < 50) {
        errors.push('Please provide a more detailed motivation (at least 50 characters)');
    }
    
    return errors;
}

// Show error messages in the form
function showErrorMessages(errors) {
    // Remove existing error messages
    const existingErrors = document.querySelectorAll('.form-error-message');
    existingErrors.forEach(error => error.remove());
    
    if (errors.length > 0) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-error-message';
        errorContainer.style.cssText = `
            background: #fee2e2;
            border: 1px solid #fecaca;
            color: #dc2626;
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 16px;
            font-size: 14px;
        `;
        
        const errorList = document.createElement('ul');
        errorList.style.cssText = 'margin: 0; padding-left: 20px;';
        
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error;
            errorList.appendChild(errorItem);
        });
        
        errorContainer.appendChild(errorList);
        
        const form = document.getElementById('applicationForm');
        if (form) {
            form.insertBefore(errorContainer, form.firstChild);
        }
    }
}

// Show success message
function showSuccessMessage(message) {
    const successContainer = document.createElement('div');
    successContainer.className = 'form-success-message';
    successContainer.style.cssText = `
        background: #d1fae5;
        border: 1px solid #a7f3d0;
        color: #065f46;
        padding: 12px;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 14px;
    `;
    successContainer.textContent = message;
    
    const form = document.getElementById('applicationForm');
    if (form) {
        form.insertBefore(successContainer, form.firstChild);
    }
}

// Submit application to Supabase
async function submitApplicationToSupabase(formData) {
    if (!supabase) {
        return {
            success: false,
            error: 'Supabase not initialized',
            message: 'Database connection not available. Please check configuration.'
        };
    }

    try {
        // Prepare data for insertion
        const applicationData = {
            first_name: formData.firstName,
            surname: formData.surname,
            email: formData.email,
            phone: formData.phone,
            program: formData.program,
            experience: formData.experience,
            availability: formData.availability,
            motivation: formData.motivation,
            application_date: new Date().toISOString(),
            status: 'pending'
        };

        // Insert into Supabase
        const { data, error } = await supabase
            .from('candidate_applications')
            .insert([applicationData])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return {
                success: false,
                error: error.message,
                message: 'There was an error submitting your application. Please try again.'
            };
        }

        return {
            success: true,
            data: data[0],
            message: 'Application submitted successfully! We will review your application and get back to you within 5-7 business days.'
        };

    } catch (error) {
        console.error('Network error:', error);
        return {
            success: false,
            error: error.message,
            message: 'Network error. Please check your connection and try again.'
        };
    }
}

// Enhanced application modal functionality
function initializeSupabaseApplicationModal() {
    const modal = document.getElementById("applicationModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalClose = document.getElementById("modalClose");
    const applicationForm = document.getElementById("applicationForm");
    const modalSuccess = document.getElementById("modalSuccess");
    const formCancel = document.getElementById("formCancel");
    const formSubmit = document.getElementById("formSubmit");

    if (!modal) return;

    // Open modal
    function openModal(programName = "") {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";

        if (programName && modalTitle) {
            modalTitle.textContent = `Apply for ${programName}`;
        }

        // Pre-select program if specified
        const programSelect = applicationForm?.querySelector('select[name="program"]');
        if (programSelect && programName) {
            programSelect.value = programName;
        }
    }

    // Close modal
    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";

        // Reset form after a delay
        setTimeout(() => {
            applicationForm?.reset();
            applicationForm?.classList.remove("hidden");
            modalSuccess?.classList.add("hidden");

            // Remove error and success messages
            const messages = document.querySelectorAll('.form-error-message, .form-success-message');
            messages.forEach(message => message.remove());

            // Reset submit button
            const submitText = formSubmit?.querySelector(".submit-text");
            const submitLoading = formSubmit?.querySelector(".submit-loading");
            if (submitText && submitLoading) {
                submitText.classList.remove("hidden");
                submitLoading.classList.add("hidden");
            }
            if (formSubmit) formSubmit.disabled = false;
        }, 300);
    }

    // Program application buttons
    const programApplyBtns = document.querySelectorAll(".program-apply");
    programApplyBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const programName = btn.getAttribute("data-program");
            openModal(programName);
        });
    });

    // General apply button
    const generalApplyBtn = document.querySelector(".general-apply");
    generalApplyBtn?.addEventListener("click", () => openModal());

    // Close modal events
    modalClose?.addEventListener("click", closeModal);
    formCancel?.addEventListener("click", closeModal);

    // Close modal when clicking outside
    modal?.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Enhanced form submission with Supabase
    applicationForm?.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(applicationForm);
        const applicationData = {
            firstName: formData.get('firstName'),
            surname: formData.get('surname'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            program: formData.get('program'),
            experience: formData.get('experience'),
            availability: formData.get('availability'),
            motivation: formData.get('motivation')
        };

        // Validate form data
        const validationErrors = validateFormData(applicationData);
        if (validationErrors.length > 0) {
            showErrorMessages(validationErrors);
            return;
        }

        // Show loading state
        const submitText = formSubmit?.querySelector(".submit-text");
        const submitLoading = formSubmit?.querySelector(".submit-loading");
        if (submitText && submitLoading && formSubmit) {
            submitText.classList.add("hidden");
            submitLoading.classList.remove("hidden");
            formSubmit.disabled = true;
        }

        // Remove any existing messages
        showErrorMessages([]);

        try {
            // Submit to Supabase
            const result = await submitApplicationToSupabase(applicationData);

            if (result.success) {
                // Show success state
                applicationForm?.classList.add("hidden");
                modalSuccess?.classList.remove("hidden");

                // Update success message if needed
                const successMessage = modalSuccess?.querySelector('p');
                if (successMessage) {
                    successMessage.textContent = result.message;
                }

                // Auto-close after 4 seconds
                setTimeout(closeModal, 4000);
            } else {
                // Show error message
                showErrorMessages([result.message]);
                
                // Reset submit button
                if (submitText && submitLoading && formSubmit) {
                    submitText.classList.remove("hidden");
                    submitLoading.classList.add("hidden");
                    formSubmit.disabled = false;
                }
            }
        } catch (error) {
            console.error('Submission error:', error);
            showErrorMessages(['An unexpected error occurred. Please try again.']);
            
            // Reset submit button
            if (submitText && submitLoading && formSubmit) {
                submitText.classList.remove("hidden");
                submitLoading.classList.add("hidden");
                formSubmit.disabled = false;
            }
        }
    });

    // Escape key to close modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Supabase
    initializeSupabase();
    
    // Replace the original application modal with Supabase-enabled version
    initializeSupabaseApplicationModal();
});

// Database schema for reference (to be created in Supabase dashboard)
const DATABASE_SCHEMA = `
CREATE TABLE IF NOT EXISTS candidate_applications (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    program VARCHAR(100) NOT NULL,
    experience VARCHAR(50) NOT NULL,
    availability VARCHAR(50) NOT NULL,
    motivation TEXT NOT NULL,
    cv_file_path VARCHAR(500),
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_candidate_applications_email ON candidate_applications(email);
CREATE INDEX IF NOT EXISTS idx_candidate_applications_date ON candidate_applications(application_date);
CREATE INDEX IF NOT EXISTS idx_candidate_applications_status ON candidate_applications(status);
`;

console.log('Supabase Form Handler loaded. Database schema:', DATABASE_SCHEMA);

