document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const f = id => document.getElementById(id).value.trim();

  const firstName = f('firstName'),
        lastName = f('lastName'),
        fatherName = f('fatherName'),
        motherName = f('motherName'),
        dob = f('dob'),
        address = f('address'),
        education = f('education'),
        phone = f('phone'),
        email = f('email'),
        emailConfirm = f('emailConfirm'),
        password = f('password'),
        gender = f('gender'),
        photo = document.getElementById('photo').files[0],
        signature = document.getElementById('photo1').files[0];

  let valid = true;

  if (!firstName || !lastName || !fatherName || !motherName) {
    alert("Please fill in all name fields.");
    valid = false;
  }

  if (!dob) {
    alert("Date of birth is required.");
    valid = false;
  }

  if (!address) {
    alert("Address is required.");
    valid = false;
  }

  if (!education) {
    alert("Education details are required.");
    valid = false;
  }

  if (!/^\d{10}$/.test(phone)) {
    alert("Invalid phone number. It should be exactly 10 digits.");
    valid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email.");
    valid = false;
  }

  if (email !== emailConfirm) {
    alert("Email and confirmation do not match.");
    valid = false;
  }

  if (!gender) {
    alert("Please select a gender.");
    valid = false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    valid = false;
  }

  if (!photo) {
    alert("Please upload a photo.");
    valid = false;
  }

  if (!signature) {
    alert("Please upload a signature.");
    valid = false;
  }

  if (!valid) return;

  console.log("Form Submitted Successfully");
  alert("Registration successful!");
  this.reset();
});
