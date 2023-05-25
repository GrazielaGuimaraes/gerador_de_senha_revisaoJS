
/*const letrasMi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const letrasMa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
const numbers = [0,1,2,3,4,5,6,7,8,9]*/

const gerador = (tamanho)  => {
    let caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    //tamanho = 255;

    let senha = "";

    for (let i = 0; i < tamanho; i++) {
      let numeroRandom = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.substring(numeroRandom, numeroRandom + 1);
    }
  
    console.log(`A SENHA DE 255 CARACTERES GERADA FOI: "${senha}"`)
  }


  module.exports = {gerador}


