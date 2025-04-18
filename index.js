const responses = [
  "Hello!",
  "How's it going?",
  "Nice to meet you!",
  "What can I do for you?",
  "I'm here to chat."
];

function sendMessage() {
  const userText = document.getElementById('userInput').value;
  if (userText.toLowerCase() === "my watch has ended") {
    document.getElementById('messages').innerHTML += "Bot: Goodbye!<br>";
    document.getElementById('userInput').disabled = true;
    return;
  }
  
  document.getElementById('messages').innerHTML += `You: ${userText}<br>`;
  document.getElementById('userInput').value = "";

  setTimeout(() => {
    document.getElementById('messages').innerHTML += `Bot: ${responses[Math.floor(Math.random() * responses.length)]}<br>`;
  }, Math.random() * 9000 + 1000); // Random delay (1-10 seconds)
}