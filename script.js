document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const dob = document.getElementById("dob").value;
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const qualification = document.getElementById("qualification").value.trim();
  const gender = document.getElementById("gender").value;
  const photoInput = document.getElementById("photo");

  // Check if photo uploaded
  if (!photoInput.files[0]) {
    alert("⚠️ Please upload a photo.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    // ✅ Success alert
    alert("✅ Registration Successful!");

    // Open new tab with details
    const newWindow = window.open();
    newWindow.document.write(`
      <html>
      <head>
        <title>Submitted Details</title>
        <style>
          body { font-family: Arial; padding: 20px; background: #f9f9f9; }
          .container { background: white; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); width: 400px; margin:auto; }
          img { max-width: 150px; border-radius: 10px; display:block; margin:auto; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Submitted Details</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Date of Birth:</b> ${dob}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Address:</b> ${address}</p>
          <p><b>Qualification:</b> ${qualification}</p>
          <p><b>Gender:</b> ${gender}</p>
          <p><b>Photo:</b></p>
          <img src="${reader.result}">
        </div>
      </body>
      </html>
    `);
  };
  reader.readAsDataURL(photoInput.files[0]);
});
