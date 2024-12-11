// Esperamos a que todo el DOM (contenido HTML) esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    
    // Seleccionamos todas las imágenes con la clase "editable-image" (esto te permite aplicar filtros a todas las imágenes)
    const images = document.querySelectorAll('.editable-image');

    // Definimos una función que se encargará de aplicar el filtro a las imágenes
    function applyFilter(filterClass) {
        // Primero, eliminamos cualquier filtro previamente aplicado a todas las imágenes
        images.forEach(image => {
            // Quitamos las clases de filtros que pudieran estar aplicadas: 'grayscale', 'sepia', 'invert'
            image.classList.remove('grayscale', 'sepia', 'invert');
            // Si el filtro seleccionado no es 'none' (es decir, no es "sin filtro"), lo aplicamos
            if (filterClass !== 'none') {
                // Añadimos la clase del filtro seleccionado a cada imagen
                image.classList.add(filterClass);
            }
        });
    }

    // Ahora definimos los eventos de los elementos del menú.
    // Cuando se haga clic en el enlace con el ID 'gray' (Grayscale), aplicamos el filtro 'grayscale' a las imágenes
    document.getElementById('gray').addEventListener('click', function () {
        applyFilter('grayscale');  // Aplica el filtro 'grayscale' (blanco y negro)
    });

    // Cuando se haga clic en el enlace con el ID 'sepia', aplicamos el filtro 'sepia' a las imágenes
    document.getElementById('sepia').addEventListener('click', function () {
        applyFilter('sepia');  // Aplica el filtro 'sepia' (tono marrón)
    });

    // Cuando se haga clic en el enlace con el ID 'invert', aplicamos el filtro 'invert' a las imágenes
    document.getElementById('invert').addEventListener('click', function () {
        applyFilter('invert');  // Aplica el filtro 'invert' (invierte los colores)
    });

    // Cuando se haga clic en el enlace con el ID 'none', eliminamos todos los filtros
    document.getElementById('none').addEventListener('click', function () {
        applyFilter('none');  // Elimina todos los filtros aplicados
    });
});
