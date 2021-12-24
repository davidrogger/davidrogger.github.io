const displayedContent = document.getElementById('displayed-content-container');
const imgContainer = document.getElementById('img-container');
const nameContainer = document.getElementById('name-container');
const aboutBtn = document.getElementById('about-btn');
const introBtn = document.getElementById('intro-btn');

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
  imgContainer.innerText = '';
  const newImg = document.createElement('img');
  newImg.src = source;
  imgContainer.appendChild(newImg);
}

function aboutDisplay() {
  const aboutTxt = '<h2>Um pouco sobre mim</h2> <p>Meu nome é Davíd Roggér, sou <strong>Brasileiro🇧🇷</strong>, do interior do estado de São Paulo, cidade chamada <a target="_blank" href="https://pt.wikipedia.org/wiki/Boituva">Boituva</a>, conhecida por ser a capital do paraquedismo.'
  displayedContent.innerHTML = aboutTxt;
  createNewImg('./img/dvd-firstday.jpg');
}

aboutBtn.addEventListener('click', aboutDisplay);
introBtn.addEventListener('click', welcomeContent);
window.onload = welcomeContent(), myName();