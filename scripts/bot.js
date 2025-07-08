const trainingData = {
  "what is capaciti": "CapaCiTi is a youth development initiative offering digital skills training, workplace readiness, and job placement support for young South Africans entering the tech industry.",
  "CAPACITI":"CapaCiTi is a youth development initiative offering digital skills training, workplace readiness, and job placement support for young South Africans entering the tech industry.",
  "About":"CapaCiTi is a youth development initiative offering digital skills training, workplace readiness, and job placement support for young South Africans entering the tech industry.",
  "capaciti program": "The CAPACITI program equips candidates with skills in IT Support, AI, Data Analytics, Cloud Computing, and Cybersecurity.",
  "Program":"The CAPACITI program equips candidates with skills in IT Support, AI, Data Analytics, Cloud Computing, and Cybersecurity.",
  "courses": "We offer Web Development, Data Analysis, Cloud Computing, Digital Marketing, and UX Design.",
  "how to apply": "Apply at www.capaciti.org.za. You'll complete an online form, aptitude test, and an interview if shortlisted.",
  "program duration": "Programs last 3 to 12 months depending on specialization. Internships may extend the duration.",
  "Duration":"Programs last 3 to 12 months depending on specialization. Internships may extend the duration.",
  "job placement": "Over 80% of our graduates find employment within 3 months. We connect you with top tech companies.",
  "support": "We provide career coaching, mentorship, soft skills training, and mental health support during the program.",
  "location": "Our hubs are in Cape Town (Observatory) and Johannesburg (Braamfontein), with some virtual options.",
  "cost": "Most programs are free for qualifying candidates. Some advanced tracks may require a small contribution.",
  "certification": "Graduates receive a CapaCiTi certificate. Some programs offer global certs like AWS, Microsoft, or CompTIA.",
  "requirements": "You must be 18–35, have a Matric certificate, and show commitment and logical thinking.",
  "thank": "You're welcome! Let me know if you have any more questions about CapaCiTi.",
  "hello": "Hi there! Ask me anything about CapaCiTi's programs, applications, or support.",
  "help": "I'm here to help! Ask about programs, courses, applications, duration, locations, or support."
};

class Chatbot {
  constructor(data) {
    this.responses = data;
  }

  getResponse(input) {
    const msg = input.toLowerCase();
    for (const key in this.responses) {
      if (msg.includes(key)) return this.responses[key];
    }

    if (["hi", "hello", "hey"].some(greet => msg.includes(greet))) return this.responses["hello"];
    if (msg.includes("thank")) return this.responses["thank"];
    if (msg.includes("help")) return this.responses["help"];

    return "I'm not sure how to answer that yet. Try asking about courses, applications, or support. Visit www.capaciti.org.za for more!";
  }
}

const chatbot = new Chatbot(trainingData);
const chatInput = document.getElementById("chatInputField");
const chatSend = document.getElementById("chatSend");
const chatMessages = document.getElementById("chatMessages");
const chatContainer = document.getElementById("chatContainer");
const chatToggle = document.getElementById("chatToggle");
const chatClose = document.getElementById("chatClose");
const chatNotification = document.getElementById("chatNotification");

function addMessage(message, sender = "user") {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${sender}-message`;

  const avatar = document.createElement("img");
  avatar.className = "message-avatar";
  avatar.src = sender === "bot"
    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Apr%202%2C%202025%2C%2011_27_45%20AM%20%281%29_1750255211982-K6hJIQnlGYWADW4DREAjOgYBjFoGnE.png"
    : "https://www.gravatar.com/avatar/?d=mp";

  const content = document.createElement("div");
  content.className = "message-content";
  content.textContent = message;

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(content);
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage() {
  const input = chatInput.value.trim();
  if (!input) return;

  addMessage(input, "user");
  const response = chatbot.getResponse(input);
  setTimeout(() => addMessage(response, "bot"), 400);
  chatInput.value = "";
}

chatSend.addEventListener("click", handleUserMessage);
chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserMessage();
});

// Show/hide chat
chatToggle.addEventListener("click", () => {
  chatContainer.classList.toggle("active");
  chatNotification.style.display = "none";
});

chatClose.addEventListener("click", () => {
  chatContainer.classList.remove("active");
});

