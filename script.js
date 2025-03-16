document.getElementById("botonEnviar").addEventListener("click", iniciarSesion);

// Si los usuarios no existen en localStorage, guardarlos
if (!localStorage.getItem("usuarios")) {
    const usuarios = {
        "MCI": btoa("Cosecha2025"),
        "JUAN - RAQUEL": btoa("Ganar123"),
        "ALBERTO - ALICIA": btoa("Alicia02"),
        "JOSE - BETSY": btoa("1904"),
        "DANIEL - MAYRA": btoa("Alicia02"),
        "JHONNY - JENNIFER": btoa("Ganar123"),
        "LUIGGY - MONICA": btoa("Alicia02"),
        "WILLIAM - TERESA": btoa("Ganar123"),
        "LUIS - ADRIANA": btoa("Alicia02")
    };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function iniciarSesion(event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contrasena").value;
    let usuarios = JSON.parse(localStorage.getItem("usuarios"));


    // Verifica si el usuario existe y si la contraseña es correcta
    // Verifica si el usuario existe y si la contraseña es correcta
    if (usuarios[usuario] && atob(usuarios[usuario]) === contraseña) {
        // Detecta si el usuario está en un dispositivo móvil
        if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent)) {
            // Redirige a la app de Google Sheets si está en un móvil
            window.location.href = "googlesheets://docs.google.com/spreadsheets/d/10mmqGMD_Zu02oQdqLbDvYMAczD9WZUM0ZOXMqRJ4iyI";
        } else {
            // Redirige al navegador en caso de que no esté en móvil
            window.location.href = "https://docs.google.com/spreadsheets/d/10mmqGMD_Zu02oQdqLbDvYMAczD9WZUM0ZOXMqRJ4iyI";
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

