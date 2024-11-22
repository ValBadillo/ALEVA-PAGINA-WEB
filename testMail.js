const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "alevacorporation@hotmail.com",
    pass: "ALEVa123456", // Asegúrate de que esta contraseña sea válida
  },
});

const mailOptions = {
  from: "alevacorporation@hotmail.com",
  to: "alevacorporation@hotmail.com",
  subject: "Prueba de correo",
  text: "Este es un correo de prueba desde Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Correo enviado:", info.response);
  }
});
