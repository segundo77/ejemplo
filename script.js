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
        var sheetId = "10mmqGMD_Zu02oQdqLbDvYMAczD9WZUM0ZOXMqRJ4iyI"; // ID de tu Google Sheet
        var sheetGid = "0"; // ID de la hoja específica

        // URL para abrir en navegador
        var urlNavegador = `https://docs.google.com/spreadsheets/d/${sheetId}/edit#gid=${sheetGid}`;

        // URL especial para móviles (forzará la app de Google Sheets)
        var urlMovil = `https://docs.google.com/open?id=${sheetId}`;

        // Detectar si el usuario está en un dispositivo móvil
        if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone|webOS|Huawei/i.test(navigator.userAgent)) {
            window.location.href = urlMovil;
        } else {
            window.location.href = urlNavegador;
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

