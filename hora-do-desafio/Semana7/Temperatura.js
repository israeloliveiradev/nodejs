function obterTemperatura(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Espera de 3 segundos")
            resolve()
        },3000)
    })
}

async function verificarClima(){
    console.log("Verificando a temperatura...")
    await obterTemperatura()
    console.log ("a temperatura em São Paulo é " + temp)
}

const temp = 25

verificarClima(temp)