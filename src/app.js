// app.js
document.addEventListener("DOMContentLoaded", () => {
  // Espera a que el contenido del documento se haya cargado completamente

  const form = document.querySelector("form");
  // Selecciona el primer formulario en el documento

  const submitButton = document.querySelector(".btn-primary");
  // Selecciona el botón de envío del formulario (con clase 'btn-primary')

  const alertDiv = document.querySelector(".alert");
  // Selecciona el div que se utilizará para mostrar mensajes de alerta

  alertDiv.style.display = "none";
  // Oculta el mensaje de alerta inicialmente (por defecto está oculto)

  submitButton.addEventListener("click", event => {
    // Añade un evento de clic al botón de envío
    event.preventDefault();
    // Evita que el formulario se envíe al hacer clic en el botón

    const inputs = form.querySelectorAll("input, textarea");
    // Selecciona todos los elementos 'input' y 'textarea' dentro del formulario

    let hasErrors = false;
    // Variable para rastrear si hay errores en los campos del formulario

    inputs.forEach(input => {
      // Itera sobre cada elemento de entrada
      if (input.type !== "radio" && input.value.trim() === "") {
        // Si el campo no es un 'radio' y está vacío
        hasErrors = true;
        // Marca que hay errores
        input.style.backgroundColor = "#f8d7da";
        // Cambia el color de fondo del campo a rojo claro para indicar un error
      } else {
        input.style.backgroundColor = "";
        // Limpia el color de fondo si el campo está correctamente llenado
      }
    });

    alertDiv.style.display = "block";
    // Muestra el div de alerta (ya que ahora se actualizará con el mensaje)

    if (hasErrors) {
      // Si hay errores en el formulario
      alertDiv.className = "alert alert-danger";
      // Cambia la clase del div de alerta a 'alert-danger' para mostrar un mensaje de error
      alertDiv.innerHTML = "Por favor, complete todos los campos requeridos.";
      // Actualiza el contenido del div de alerta con el mensaje de error
    } else {
      // Si no hay errores en el formulario
      alertDiv.className = "alert alert-success";
      // Cambia la clase del div de alerta a 'alert-success' para mostrar un mensaje de éxito
      alertDiv.innerHTML = "Formulario enviado correctamente.";
      // Actualiza el contenido del div de alerta con el mensaje de éxito
      // Aquí puedes simular el envío del formulario si lo deseas, por ejemplo:
      // form.submit();
      // Esta línea está comentada porque el envío del formulario está prevenido
    }
  });
});
