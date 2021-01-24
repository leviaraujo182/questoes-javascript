function repetidor(elemento, n) {
    var lista = [];
    for (contador = 0; contador < n; contador++) {
        lista.push(elemento);
    }

    return console.log(lista);
}

repetidor("Teste", 10);
