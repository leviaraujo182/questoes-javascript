function inverso(valor) {
    var inverte;
    if (typeof (valor) == 'number') {
        inverte = "-" + valor;
        console.log(inverte);
    }

    if (typeof (valor == 'boolean')) {
        if (valor == true) {
            console.log("false");
        } else {
            if (valor == false) {
                console.log("true");
            }
        }
    }
}

inverso(false);