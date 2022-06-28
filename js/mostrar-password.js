const eye = document.querySelector(".icon-eye");
const campo = document.getElementById("pass");

eye.addEventListener("click", function () {
  const icono = this.querySelector("i");

  if (this.nextElementSibling.type === "password") {
    this.nextElementSibling.type = "text";
    icono.classList.remove("fa-eye-slash");
    icono.classList.add("fa-eye");
    setTimeout("ocultar()", 3000);
  } else {
    this.nextElementSibling.type = "password";
    icono.classList.remove("fa-eye");
    icono.classList.add("fa-eye-slash");
  }
});

function ocultar() {
  campo.type = "password";
}
