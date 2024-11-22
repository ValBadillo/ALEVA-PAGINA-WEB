const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

// Middleware para manejar datos JSON
app.use(bodyParser.json());

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "Outlook", // Usa el servicio que prefieras (Gmail, Outlook, etc.)
  auth: {
    user: "alevacorporation@hotmail.com", // Reemplaza con tu correo
    pass: "ALEVa123456", // Reemplaza con tu contraseña
  },
});

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phone } = req.body;

  if (!firstName || !lastName || !email || !phone) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  const mailOptions = {
    from: "tuemail@gmail.com", // El correo que envía
    to: "alevacorporation@hotmail.com", // Correo donde quieres recibir la información
    subject: "Nuevo contacto desde el formulario",
    text: `Nombre: ${firstName} ${lastName}\nCorreo: ${email}\nTeléfono: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado exitosamente." });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ error: "Error al enviar el correo." });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
