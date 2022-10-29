const tabela = document.getElementById('tabela');

function addElement(infos, classes) {
  const row = document.createElement('tr');

  for (let info of infos) {
    const data = document.createElement('td');
    data.className = classes;
    data.textContent = info;
    row.appendChild(data);
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
    addElement(Object.values(personagem), "infoPersonagem");
  }
});