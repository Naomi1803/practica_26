function mostrarDatos1() {
    let nombre = document.getElementById("nombre").value;
    let genero = document.getElementById("genero").value;
    let precio = parseFloat(document.getElementById("precio").value);
    let artista = parseInt(document.getElementById("artista").value);

    alert(
        "Nombre: " + nombre +
        "\nGenero: " + genero +
        "\nPrecio: " + precio +
        "\nArtista: " + artista
    );
}


function mostrarDatos2() {
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;

    alert(
        "Nombre: " + nombre +
        "\nEdad " + edad +
        "\ngenero " + genero
    );
}


function mostrarDatos3() {
    let nombre = document.getElementById("nombre").value;
    let duracion = document.getElementById("duracion").value;
    let compositor = document.getElementById("compositor").value;
    let cantante = parseInt(document.getElementById("cantante").value);

    alert(
        "Nombre: " + nombre +
        "\nDuracion " + duracion +
        "\nCompositor " + compositor +
        "\nCantante " + cantante
    );
}


function mostrarDatos4() {
    let nombre = document.getElementById("nombre").value;
    let usuario = parseInt(document.getElementById("usuario").value);

    alert(
        "Nombre: " + nombre +
        "\nUsuario " + usuario
    );
}