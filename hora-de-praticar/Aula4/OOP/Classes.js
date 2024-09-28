class Carro {
    constructor(cor, marca, ano, cambio) {
        this.ano = ano;
        this.marca = marca;
        this.cor = cor;
        this.cambio = cambio;
        this.velocidade = 0; 
        this.ligado = false;  
    }

    ligar() {
        if (!this.ligado) {
            console.log("Carro ligado");
            this.ligado = true;
        } else {
            console.log("O carro já está ligado");
        }
    }

    desligar() {
        if (this.ligado) {
            console.log("Carro desligado");
            this.ligado = false;
        } else {
            console.log("O carro já está desligado");
        }
    }

    acelerar() {
        if (this.ligado) {
            this.velocidade += 5; 
            console.log(`A velocidade atual do carro é ${this.velocidade} km/h`);
        } else {
            console.log("Você precisa ligar o carro primeiro.");
        }
    }
}

let carro1 = new Carro("Preto", "Honda", 2024, "Automático");
let carro2 = new Carro("Vermelho", "Toyota", 2023, "Manual");

console.log(carro1);
carro1.ligar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.desligar();
