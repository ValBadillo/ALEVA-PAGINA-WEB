document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Previene que la página se recargue
  
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Construir el correo
    const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
    const body = `You have a new message:\n\n
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Phone: ${phone}`;
  
    const mailtoLink = `mailto:alevacorporation@hotmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    // Abrir el cliente de correo predeterminado
    window.location.href = mailtoLink;
  
    // Limpiar el formulario
    document.getElementById("contact-form").reset();
  });
  