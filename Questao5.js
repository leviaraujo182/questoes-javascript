function verificador(n1, n2) {
    if (n1 > n2) {
        console.log("n1 maior que n2.");
    } else {
        if (n1 == n2) {
            console.log("n1 é igual a n2.");
        } else {
            if (n1 < n2) {
                console.log("n1 é menor que n2");
            }
        }
    }
}

verificador(1, 2);