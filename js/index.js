var titulo = document.querySelector('.titulo')

titulo.textContent = 'Nutricionista Aparecida'

var paciente = document.querySelector('#primeiro-paciente')

var tdPeso = paciente.querySelector('.info-peso')
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector('.info-altura')
var altura = tdAltura.textContent

var tdImc = document.querySelector('.info-imc')

var alturaInvalida = true
var pesoValido = true

if (peso <= 0 || peso >= 300) {
  console.log('Peso Inválido')
  pesoValido = false
  tdImc.textContent = 'Peso Inválido'
}

if (altura <= 0 || altura >= 3.0) {
  console.log('Altura Inválida')
  alturaValida = false
  tdImc.textContent = 'Altura Inválida'
}
if (pesoValido && alturaValida) {
  var imc = peso / (altura * altura)
  tdImc.textContent = imc
}

console.log(imc)
