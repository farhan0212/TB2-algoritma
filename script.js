// variabel untuk menampung form
const form = document.querySelector("#inputForm");

// menambahan event submit ke form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // buat variabel untuk inputan
  const username = document.querySelector("#inputUsername").value;
  const email = document.querySelector("#inputEmail").value;
  const password = document.querySelector("#inputPassword").value;

  // inisialisasi awal bahwa form valid = true
  let isValid = true;

  // buat variabel yang menampung regex untuk validasi form
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // kondisi ketika usernameRegex tidak sama dengan inputan username
  if (!usernameRegex.test(username)) {
    isValid = false;
    document.getElementById("usernameError").textContent = "Invalid Username";
  }

  // kondisi ketika usernameRegex tidak sama dengan inputan username
  if (!emailRegex.test(email)) {
    isValid = false;
    document.getElementById("emailError").textContent = "Invalid Email";
  }

  // kondisi ketika usernameRegex tidak sama dengan inputan username
  if (!passwordRegex.test(password)) {
    isValid = false;
    document.getElementById("passwordError").textContent = "Invalid Password";
  }

  // kondisi ketika semuanya benar
  if (isValid) {
    alert("format sudah sesuai,  yeayyyyyy");
  }
});
