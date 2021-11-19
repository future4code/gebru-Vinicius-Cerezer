// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // const num1 = 1
  // const num2 = 2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // mensagem ="Olá Mundo!"
  const mensagem = prompt('Olá Mundo!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let sizevert = prompt ("diga um numero para um retangulo.") 
  let sizehori = prompt ("agora um outro numero")
  const retangulo =  sizevert * sizehori
  console.log(retangulo)
  return retangulo
}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual =  prompt ("Em que ano estamos?")
  let anoDeNascimento = prompt ("Em que ano você nasceu?")
  const idade = (anoAtual - anoDeNascimento)
  console.log (idade)
  return idade
 }

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let peso = prompt ("Quantos quilos você pesa?")
  let altura = prompt ("Qual a sua altura em metros?")
  const IMC = (peso /(altura * altura))
  return  (IMC)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
   const NOME = prompt ("Qual o seu nome?")
   let idade = prompt ("Qual a sua idade?")
   const EMAIL = prompt ("Insira seu email?")
   const INFORMAÇÕES = (`Meu nome é ${NOME}, tenho ${idade} anos, e o meu email é ${EMAIL}.`)
  console.log (INFORMAÇÕES)
  return (INFORMAÇÕES)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores1 = prompt ("Diga uma cor!")
  const cores2 = prompt ("Diga outra cor!")
  const cores3 = prompt ("Diga mais uma cor!")
  const array = ([`${cores1}`, `${cores2}`, `${cores3}`])
  console.log (array)
  return (array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  console.log ((string).toUpperCase())
  return ((string).toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custo = (3000)
  const ingresso = (30)
  const resultado = (custo / ingresso)
  console.log (resultado)
  return (resultado)
 }

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1 >= string2)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return (array)[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const myArray = ["maçã","banana","uva"]
  myArray.pop();
  return myArray
  console.log(myArray)


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const myArray = ["maçã","banana","uva"]
  myArray.reverse();
  return myArray
  console.log (myArray)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.localeCompare(string2, undefined, { sensitivity: 'base' }) === 0)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}