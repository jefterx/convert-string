function stringToInteger(str) {
    let resultado = 0; 
    let isNegativo = false;
    let indiceInicial = 0;

    // Verificação
    if (str[0] === '-') {
        isNegativo = true;
        indiceInicial = 1;
    }

    const mapaDigitos = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
    }

    for (let i = indiceInicial; i <str.length; i++) {
        let digito = mapaDigitos[str[i]];
    
        resultado = resultado * 10 + digito;
    }
    return isNegativo ? -resultado : resultado;

}

stringToInteger;

console.log(stringToInteger("1234"));

