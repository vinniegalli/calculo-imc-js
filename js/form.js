// ============== ADICIONA PACIENTE AO FORMULÁRIO ==================//

var botaoEnviar = document.querySelector('#adicionar-paciente')

botaoEnviar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')

  var nome = form.nome.value
  var peso = form.peso.value
  var altura = form.altura.value
  var gordura = form.gordura.value

  var pacienteTr = document.createElement('tr')
  var pesoTd = document.createElement('td')
  var alturaTd = document.createElement('td')
  var nomeTd = document.createElement('td')
  var gorduraTd = document.createElement('td')
  var imcTd = document.createElement('td')

  nomeTd.textContent = nome
  pesoTd.textContent = peso
  alturaTd.textContent = altura
  gorduraTd.textContent = gordura
  imcTd.textContent = calculaImc(peso, altura)

  pacienteTr.appendChild(nomeTd)
  pacienteTr.appendChild(pesoTd)
  pacienteTr.appendChild(alturaTd)
  pacienteTr.appendChild(gorduraTd)
  pacienteTr.appendChild(imcTd)

  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)
})
