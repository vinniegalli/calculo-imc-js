// ============== ADICIONA PACIENTE AO FORMULÁRIO ==================//

var botaoEnviar = document.querySelector('#adicionar-paciente')

botaoEnviar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  
  //Extrai informações do paciente do form
  var paciente = obtemPacienteDoForm(form);

  // Cria td e TR do paciente
  var pacienteTr = montaTr(paciente)

  var erros = validaPaciente(paciente)
  

  if(erros.length > 0){
    exibeMensagensDeErros(erros);
  
  return;
  };

 
  //Adiciona na tabela
  var tabela = document.querySelector('#tabela-pacientes')

  tabela.appendChild(pacienteTr)

  form.reset();

  var mensagemErro = document.querySelector('#mensagens-erro');
  
  mensagemErro.innerHTML = ""
})

function exibeMensagensDeErros(erros){
  var ul = document.querySelector('#mensagens-erro');

  ul.innerHTML = ""

  erros.forEach(function(erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li)
  });
}

function obtemPacienteDoForm(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
   var pacienteTr = document.createElement('tr')
   pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

   return pacienteTr;
}

function montaTd(dado, classe){
  
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td

}

 //validar paciente

  function validaPaciente(paciente){

    var erros = []

    if(paciente.nome.length == 0){
      erros.push('O nome não pode ser em branco')
    }

    if(!validaPeso(paciente.peso))
      erros.push('Peso inválido')

    if(!validaAltura(paciente.altura))
      erros.push(" Altura Inválida ")

    if(paciente.gordura.length == 0){
      erros.push('O % de gordura não pode estar em branco')
    }
    if(paciente.peso.length == 0){
      erros.push('O peso não pode ser em branco')
    }
    if(paciente.altura.length == 0){
      erros.push('A Altura não pode ser em branco')
    }
    
    return erros;
  }