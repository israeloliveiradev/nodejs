const input = require('prompt-sync')({ sigint: true });

let nasc = parseInt(input("Digite o ano de nascimento: "), 10);
let ano = 2024;

let contaAtiva = input("Sua conta está ativa? S/N: ").toUpperCase();

let restricao = input("Você tem alguma restrição? S/N: ").toUpperCase();

let sistema = input("Sistema está em manutenção? S/N: ").toUpperCase();

if ((ano - nasc >= 18) && (contaAtiva === "S") && (restricao === "N" || sistema == "N")) {
    console.log("Acesso concedido!");

} else {
    console.log("Acesso negado!");
}
