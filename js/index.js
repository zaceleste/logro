// Obtiene el usuario actualmente autenticado del almacenamiento local o establece false si no hay usuario autenticado
const user = JSON.parse(localStorage.getItem('login_success')) || false

// Redirige al usuario a la página de inicio de sesión si no hay usuario autenticado
if (!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes iniciar sesión para acceder a esta página.',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
           window.location.href = 'login.html';
        }
    });
}
// Selecciona el botón de cierre de sesión por su ID
const logoutBoton = document.querySelector('#logoutBoton')

// Agrega un event listener para el evento 'click' al botón de cierre de sesión
logout.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estás seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false
    }).then((result) => {
        // Este método then se encadena a la promesa devuelta por Swal.fire().
        // Espera a que el usuario interactúe con el diálogo y luego ejecuta una función de devolución de llamada.
        // 'result' contiene el resultado de la interacción del usuario con el diálogo.
    
         // Verifica si el usuario confirmó la acción en el diálogo de SweetAlert2.
        if (result.isConfirmed) {
            // Elimina la información de inicio de sesión del almacenamiento local.
            localStorage.removeItem('login_success');
    
            Swal.fire({
                icon: 'success',
                title: 'Sesión cerrada',
                text: 'Tu sesión ha sido cerrada correctamente.',
                confirmButtonText: 'OK',
                allowOutsideClick: false
            }).then(() => {
                // Muestra un diálogo de SweetAlert2 informando al usuario que la sesión se ha cerrado correctamente.
                // 'then()' espera a que el usuario cierre este diálogo.
    
                // Redirige al usuario a la página de inicio de sesión.
                window.location.href = 'index.html';
            });
        }
    });
    
});