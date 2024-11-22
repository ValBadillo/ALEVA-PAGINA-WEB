document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!firstName || !lastName || !email || !phone) {
    alert("Por favor, llena todos los campos.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, phone }),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message);
      document.getElementById("contact-form").reset();
    } else {
      alert(result.error);
    }
  } catch (error) {
    console.error("Error enviando datos:", error);
    alert("Error al enviar la información.");
  }
});

