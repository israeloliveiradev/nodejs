const input = require('prompt-sync')({ sigint: true });

function ConversorUnidades() {
    const menu = `
***************************************************
*                                                 *
*             CONVERSOR DE UNIDADES               *
*                                                 *
***************************************************
*                                                 *
*            1 - Converter Metros                 *
*            2 - Converter Centímetros            *
*            3 - Converter Milímetros             *
*                                                 *
***************************************************
`;
    console.log(menu);

    let opcao = parseInt(input("Digite a Opção Desejada:"));

    if (isNaN(opcao) || opcao < 1 || opcao > 3) {
        console.log("Opção inválida. Por favor, digite um número entre 1 e 3.");
        return; 
    }

    let numero = parseFloat(input("Digite o Número Desejado:"));

    if (isNaN(numero)) {
        console.log("Número inválido. Por favor, digite um número válido.");
        return; 
    }

    if (opcao === 1) {
        let cm = numero * 100;
        let mm = numero * 1000;
        console.log(`${numero} metros equivalem a ${cm} cm e ${mm} mm.`);
    } 
    else if (opcao === 2) {
        let m = numero / 100;
        let mm = numero * 10;
        console.log(`${numero} cm equivalem a ${m} m e ${mm} mm.`);
    }
    else if (opcao === 3) {
        let m = numero / 1000;
        let cm = numero / 10;
        console.log(`${numero} mm equivalem a ${m} m e ${cm} cm.`);
    }
}

ConversorUnidades();
