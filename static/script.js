function sendMessage() {
    let userInput = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");
    let message = userInput.value;
    userInput.value = ""; // Clear the input after sending

    // Append user message to chat
    chatBox.innerHTML += `<div>User: ${message}</div>`;

    // Send the message to the Flask backend
    fetch('/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"message": message}),
    })
    .then(response => response.json())
    .then(data => {
        // Append bot reply to chat
        chatBox.innerHTML += `<div>Assistant: ${data.reply}</div>`;
        // Auto scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch((error) => {
        console.error('Error:', error);
    });


}

// Add this to your script.js
document.getElementById('image-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let imageInput = document.getElementById('image-input');
    let formData = new FormData();
    formData.append('image', imageInput.files[0]);

    fetch('/analyze-image', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display the analysis result
        let chatBox = document.getElementById('chat-box');
        chatBox.innerHTML += `<div>Assistant: ${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

