document.getElementById("contact").addEventListener("submit-btn", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var message = document.getElementById("message").value;
  
    // Send form data to server
    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, mob, message })
    })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact").reset(); // Reset form fields
      } else {
        throw new Error('Failed to send message');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Failed to send message. Please try again later.");
    });
  });
  