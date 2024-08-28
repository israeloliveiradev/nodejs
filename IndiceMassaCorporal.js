// Cálculo do IMC (Índice de Massa Corporal)

function IndiceMassaCorporal() {

    const input = require('prompt-sync')({ sigint: true });

    let nome = input ("Digite seu nome:")

    let altura = input("Digite sua Altura: ")
    let peso =  input ("Digite seu Peso:")

    const imc = peso / (altura * altura)
  return (
    console.log(`Olá, ${nome} seu IMC é ${imc}`)
  )
}
IndiceMassaCorporal();
