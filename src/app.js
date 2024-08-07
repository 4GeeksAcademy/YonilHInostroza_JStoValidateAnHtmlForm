// app.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitButton = document.querySelector(".btn-primary");
  const alertDiv = document.querySelector(".alert");

  // Ocultamos el mensaje de alerta inicialmente
  alertDiv.style.display = "none";

  submitButton.addEventListener("click", event => {
    event.preventDefault(); // Evita el envío del formulario

    const inputs = form.querySelectorAll("input, textarea");
    let hasErrors = false;

    // Verificar si todos los campos están llenos
    inputs.forEach(input => {
      if (input.type !== "radio" && input.value.trim() === "") {
        hasErrors = true;
        input.style.backgroundColor = "#f8d7da"; // color de fondo para error
      } else {
        input.style.backgroundColor = ""; // Limpiar el color de fondo si es válido
      }
    });

    // Configuración del mensaje de alerta
    alertDiv.style.display = "block";
    if (hasErrors) {
      alertDiv.className = "alert alert-danger";
      alertDiv.innerHTML = "Por favor, complete todos los campos requeridos.";
    } else {
      alertDiv.className = "alert alert-success";
      alertDiv.innerHTML = "Formulario enviado correctamente.";
      // Aquí puedes simular el envío del formulario si lo deseas, por ejemplo:
      // form.submit();
    }
  });
});
