function limparForm(){
    document.getElementById('name').value = "";
    document.getElementById('idade').value = "";
    document.getElementById('endereço').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('rg').value = "";
}

// limpar os radios 
function limparPeloNome(genero) {
    var radios = document.getElementsByName(genero);
    for (var i = 0; i < radios.length; i++)
      radios[i].checked = false;
  }
  
  document.getElementById('limpar').addEventListener('click', function() {
    limparPeloNome('genero');
  });