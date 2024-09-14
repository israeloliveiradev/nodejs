// Cálculo de Média Aritmética

function MediaAritimetica() {
    const input = require('prompt-sync')({ sigint: true });

    let n1 = input("Digite o primeiro número: ");
    let n2 = input("Digite o segundo número: ");
    let n3 = input("Digite o terceiro número: ");

    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;

  return (
    console.log(`A média aritimética dos números é: ${media}`)
  )
}

MediaAritimetica();

