const tabela = document.getElementById('tabela');

function addElement(infos, classes) {
  const row = document.createElement('tr');

  for (let info of infos) {
    const data = document.createElement('td');
    data.className = classes;
    data.textContent = info;
    row.appendChild(data);
  }

  //Muda a cor do nome de acordo com o alinhamento do personagem.
  if (row.children[3].textContent == 'The Boys') {
    row.children[0].style.color = '#8080ff';
    row.children[3].style.color = '#8080ff';
  } else {
    row.children[0].style.color = '#fa5757';
    row.children[3].style.color = '#fa5757';
  }

  //Muda idade caso for igual a '0' para 'Desconhecida'.
  if (row.children[1].textContent == '0') {
    row.children[1].textContent = 'Desconhecida';
  } 

  tabela.appendChild(row);
}

function getJsonFromUrl(url) {
  return fetch(url).then(res => res.json());
}

//Busca as informações dos personagens no database e as insere na página.
getJsonFromUrl('../backend_php/api/personagens.php').then(resultado => {
  let personagensJson = resultado;
  for (let personagem of personagensJson) {
    addElement(Object.values(personagem), 'infoPersonagem');
  }
});

