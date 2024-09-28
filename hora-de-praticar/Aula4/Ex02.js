const input = require('prompt-sync')({ sigint: true });


function calculoCombustivel(alcool, gasolina) {
    if (alcool / gasolina <= 0.7) {
        return "É melhor abastecer com Álcool.";
    } else {
        return "É melhor abastecer com Gasolina.";
    }
}

const precoAlcool = parseFloat(input("Digite o preço do Álcool hoje: "));
const precoGasolina = parseFloat(input("Digite o preço da Gasolina hoje: "));

const resultado = calculoCombustivel(precoAlcool, precoGasolina);
console.log(resultado);





