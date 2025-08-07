const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");
const form = document.getElementById("form-login");

togglePassword.addEventListener("change", () => {
  password.type = togglePassword.checked ? "text" : "password";
});

form.addEventListener("submit", function (e) {
  e.preventDefault;

  const email = document.getElementById("email").value;
  const senha = password.value;

  if (email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Login realizado com sucesso");
});
