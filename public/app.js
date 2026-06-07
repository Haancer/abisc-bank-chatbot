const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

let conversationHistory = [];

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function appendMessage(role, text) {
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.innerHTML = `<div class="bubble">${text}</div>`;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
  return div;
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  userInput.value = "";
  appendMessage("user", text);

  conversationHistory.push({ role: "user", content: text });

  const typingDiv = appendMessage("bot typing", "Abby is typing...");

  try {
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: conversationHistory }),
    });
  

    const result = await response.json();
    typingDiv.remove();

    appendMessage("bot", result.reply);
    conversationHistory.push({ role: "assistant", content: result.reply });

  } catch (error) {
    typingDiv.remove();
    appendMessage("bot", "Sorry, something went wrong. Please try again.");
  }
}