const input = require('prompt-sync')({ sigint: true });

function ConvesorMoedas() {

    let dolar = 5.56

    let real = input("Digite o Valor em Real:")

    let resultado = real / dolar


  return (

      console.log(`Você possui ${resultado.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`)
  )
}

ConvesorMoedas();
