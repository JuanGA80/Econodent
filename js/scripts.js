const items = document.querySelectorAll('.item');
let index = 0;

function showNextItem() {
    items.forEach(item => {
        item.style.display = 'none'; // Oculta todos los elementos
    });
    index = (index + 1) % items.length; // Calcula el índice del siguiente elemento
    items[index].style.display = 'block'; // Muestra el siguiente elemento
}

setInterval(showNextItem, 60000); // Cambia de elemento cada 60 segundos


