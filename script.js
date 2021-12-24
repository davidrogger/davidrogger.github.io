const displayedContent = document.getElementById('displayed-content-container');
const imgContainer = document.getElementById('img-container');
const nameContainer = document.getElementById('name-container');
const aboutBtn = document.getElementById('about-btn');
const introBtn = document.getElementById('intro-btn');
const learnBtn = document.getElementById('learn-btn');

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
  const aboutTxt = '<h2>Um pouco sobre mim</h2> <p>Meu nome é Davíd Roggér, sou <strong>Brasileiro🇧🇷</strong>, do interior do estado de São Paulo, cidade chamada <a target="_blank" href="https://pt.wikipedia.org/wiki/Boituva">Boituva</a>, conhecida por ser a capital do paraquedismo.</p><p>Sempre gostei dessa parte de técnologia, mas sempre fiquei divido em qual parte focar, trabalhei um tempo prestando serviços de suporte em uma loja de informática, ajudando pessoas tanto do lado empresarial, como residêncial, tirando dúvidas de ferramentas no ambiente Windows, identificando defeitos e problemas, na parte de software e hardware.</p><p>Meu ultimo emprego de práticamente 5 anos, era como projetista, em uma metalúrgica, desenvolvendo soluções em chapas metálicas, seja mobiliários, gabinetes, diversas variedades, acessórios, tudo relacionado a parte metálica, mais especializado em chapas, sou muito grato pelos anos lá, aprendi muito, tanto profissionalmente, quando pessoalmente, passando os anos, vi que realmente o que eu queria pra mim, era voltar para área de técnologia, foi então que encontrei a trybe, e foi exatamente oque eu estava procurando para começar minha nova jornada.</p>';
  displayedContent.innerHTML = aboutTxt;
  createNewImg('./img/dvd-firstday.jpg');
}

function learnDisplay() {
  const learTxt = '<h2>Técnologias que estou aprendendo</h2><p>Atualmente meu foco na parte de estudos está sendo total para o conteúdo da Trybe.</p>';
  displayedContent.innerHTML = learTxt;
  createNewImg('./img/web-development.jpg');
}

aboutBtn.addEventListener('click', aboutDisplay);
introBtn.addEventListener('click', welcomeContent);
learnBtn.addEventListener('click', learnDisplay)
window.onload = welcomeContent(), myName();