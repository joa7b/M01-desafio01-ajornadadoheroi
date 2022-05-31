const prompt = require('prompt-sync')();

let nome = prompt("Insira seu nome: ");

console.log(`Somos viagentes do tempo, Sr.(a) ${nome}, viemos do ano de 2536 e precisamos voltar para levar as informações que recolhemos. Sua missão é nos ajudar a configurar a máquina do tempo, vamos fazer algumas perguntas e você responda SIM ou NÃO. MAS CUIDADO! Você pode mandar nós para outro ano.`);

console.log();

let perguntas = [
  prompt("A máquina do tempo está ligada? "),
  prompt("Você o ano 2536 está selecionado? "),
  prompt("O cabo verde está conectado? "),
  prompt("O sinal de energia está estável? "),
  prompt("O repartimento de combustível está cheio? ")
]


let count = 0;
let quant = perguntas.length;
let quantidadeElementos = 0;

while (count < quant) {
    if (perguntas[count] == 'sim') {
        quantidadeElementos++
    }

    count++
}

console.log();

if (quantidadeElementos == 5) {
    console.log("Obrigado, voltamos para 2536 em perfeito estado.");
  }else if (quantidadeElementos == 4) {
    console.log("Voltamos para 2536, mas acho que faltou um braço...");
  }else if (quantidadeElementos == 3) {
    console.log("Voltamos para 2536, mas onde está todo mundo? Meu deus! onde está meus membros?");
  }else if (quantidadeElementos <= 2) {
    console.log("Xiii...Deu errado, é melhor você sair rápido.");
  }else {
      console.log("A viagem no tempo deu errado, e você está preso pela federação intergaláctica de viagens no tempo.");
  }
