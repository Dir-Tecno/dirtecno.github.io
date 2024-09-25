document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usuario = event.target[0].value;
    const contraseña = event.target[1].value;

    // Aquí puedes agregar la lógica de autenticación
    if (usuario && contraseña) {
        alert('Iniciando sesión...');
        // Redirigir o manejar la autenticación aquí
    }
});
