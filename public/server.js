const express = require("express");
const app = express();
const port = 3000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Ruta básica para comprobar el servidor
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
