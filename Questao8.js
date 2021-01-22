function multiplicador(n1, n2) {
    var contador;
    var multiplicador = 0;
    for (contador = 0; contador < n1; contador++) {
        multiplicador = multiplicador + n2;
    }

    console.log(multiplicador);
}

multiplicador(3, 5);