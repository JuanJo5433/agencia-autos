// Obtén el elemento de la barra de progreso y el logotipo
const progressBar = document.getElementById("progress");
const logo = document.getElementById("logo");

// Inicializa el valor de la barra de progreso
let progressValue = 0;

// Función para actualizar la barra de progreso y el logotipo
function updateProgressBar() {
    progressValue++;
    progressBar.style.width = progressValue + "%";

    // Si la barra de progreso llega al 100%, detén la actualización
    if (progressValue >= 100) {
        clearInterval(progressInterval);
    }
}

// Actualiza la barra de progreso y el logotipo cada 50 milisegundos
const progressInterval = setInterval(updateProgressBar, 26);


 // Simula una redirección después de unos segundos
 setTimeout(function() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "menu.php";
    }, 1000); // Redirecciona después de 1 segundo de la transición
}, 5000); // Espera 5 segundos antes de iniciar la transición 
