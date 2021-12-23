const displayedContent = document.getElementById('displayed-content-container');
const imgContainer = document.getElementById('img-container');
const nameContainer = document.getElementById('name-container');


function welcomeContent() {
  const welcomeText = '<h2> Bem vindo ao meu portfólio!</h2> <p> Nessa página você terá acesso aos conteúdos que estou estudando, projetos, redes sociais e também uma parte pessoal com relação aos hobbies quando não estou "codando" haha.🤖</p>'
  displayedContent.innerHTML = welcomeText;
  createNewImg('./img/gwyneth-balucio-hello-world.gif');
}

function myName() {
  const name = '<Davíd Roggér/>'
  nameContainer.innerText = name;
}

function createNewImg(source) {
  const newImg = document.createElement('img');
  newImg.src = source;
  imgContainer.appendChild(newImg);
}

window.onload = welcomeContent(), myName();