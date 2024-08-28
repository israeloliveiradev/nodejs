// Parabéns! Você foi contratado por uma empresa de tecnologia educacional chamada EduTech Innovations, que deseja adicionar ferramentas interativas ao seu site para ajudar os estudantes a compreender conceitos científicos e matemáticos. 
// Sua primeira missão é criar um código JS que converta temperaturas de graus Celsius para graus Fahrenheit. A saída deverá ser feita no console.


const menu = `
***************************************************
*                                                 *
*            CONVERSOR DE MEDIDAS                 *
*                                                 *
***************************************************
*                                                 *
*         1 - Converter Celsius para Fahrenheit   *
*         2 - Converter Fahrenheit para Celsius   *
*         3 - Sair                                *
*                                                 *
***************************************************
`;
console.log(menu)


const input = require('prompt-sync')({ sigint: true });
let opcao;

opcao = input("Digite a Opção desejada:");

if(opcao == 1){
    let celsius = input("Digite a temperatura em Celsius: ");
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);
}
else if(opcao == 2){
    let fahrenheit = input("Digite a temperatura em Fahrenheit: ");
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`A temperatura em Celsius é: ${celsius}`);
}
else if(opcao == 3){
    console.log("Saindo do programa...");
}
else{
    console.log("Opção inválida!");
}





