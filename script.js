const displayedContent = document.getElementById('displayed-content-container');
const imgContainer = document.getElementById('img-container');
const nameContainer = document.getElementById('name-container');
const aboutBtn = document.getElementById('about-btn');
const introBtn = document.getElementById('intro-btn');
const learnBtn = document.getElementById('learn-btn');
const projectsBtn = document.getElementById('projects-btn');
const networkBtn = document.getElementById('network-btn');
const hobbiesBtn = document.getElementById('hobbies-btn');
const contactBtn = document.getElementById('contact-btn');

function welcomeContent() {
  const welcomeText = '<h2> Bem vindo ao meu portfólio!</h2> <p> Nessa página você terá acesso aos conteúdos que estou estudando, projetos, redes sociais e também uma parte pessoal com relação aos hobbies quando não estou "codando" haha.🤖</p>'
  displayedContent.innerHTML = welcomeText;
  createNewImg('./img/gwyneth-balucio-hello-world.gif', imgContainer);
}

function myName() {
  const name = '<Davíd_Roggér/>'
  nameContainer.innerText = name;
}

function createNewImg(sourceImg, display) {
  imgContainer.innerText = '';
  const newImg = document.createElement('img');
  newImg.src = sourceImg;
  display.appendChild(newImg);
}

function aboutDisplay() {
  const aboutTxt = '<h2>Um pouco sobre mim</h2> <p>Meu nome é Davíd Roggér, sou <strong>Brasileiro🇧🇷</strong>, do interior do estado de São Paulo, cidade chamada <a target="_blank" href="https://pt.wikipedia.org/wiki/Boituva">Boituva</a>, conhecida por ser a capital do paraquedismo.</p><p>Sempre gostei dessa parte de técnologia, mas sempre fiquei divido em qual parte focar, trabalhei um tempo prestando serviços de suporte em uma loja de informática, ajudando pessoas tanto do lado empresarial, como residêncial, tirando dúvidas de ferramentas no ambiente Windows, identificando defeitos e problemas, na parte de software e hardware.</p><p>Meu ultimo emprego de práticamente 5 anos, era como projetista, em uma metalúrgica, desenvolvendo soluções em chapas metálicas, seja mobiliários, gabinetes, diversas variedades, acessórios, tudo relacionado a parte metálica, mais especializado em chapas, sou muito grato pelos anos lá, aprendi muito, tanto profissionalmente, quando pessoalmente, passando os anos, vi que realmente o que eu queria pra mim, era voltar para área de técnologia, foi então que encontrei a trybe, e foi exatamente oque eu estava procurando para começar minha nova jornada.</p>';
  displayedContent.innerHTML = aboutTxt;
  createNewImg('./img/dvd-firstday.jpg', imgContainer);
}

function learnDisplay() {
  const learnTxt = '<h2>Técnologias que estou aprendendo</h2><p>Atualmente meu foco na parte de estudos está sendo total para o conteúdo da <a href="https://www.betrybe.com/" target="blank_">Trybe</a>.</p><p>Curso é divido em 4 modulos:</p>';
  const learnTxt2 = '<ol><li><strong>Fundamentos do Desenvolvimento</strong> - Nesse modulo estamos aprendendo, Unix, Git & Github, HTML, CSS e JavaScript.</li><li><strong>Desenvolvimento Froent-end</strong> - Vamos aprender, React, Metodologias Ageis e Redux.</li><li><strong>Desenvolvimento Back-end</strong> - Vamos aprender Bancos de dados relacionais, NoSQL, Updates, Aggregation Framework, NodeJS, Deploy, arquitetura de software e sockets</li><li><strong>Ciência da Computação</strong> - Vamos aprender, arquitetura de computarores, redes, ferramentas de segurança, python, testes de exceções e entrada e saida de dados.</li></ol>'
  const learnTxt3 = '<br><p>Para acompanhar meu avanço no aprendizado desses modulos, é mais fácil acompanhar meu github na parte de redes sociais.</p>'
  displayedContent.innerHTML = learnTxt + learnTxt2 + learnTxt3;
  createNewImg('./img/learning.png', imgContainer);
}

function projectsDisplay() {
  const projectsIntro = '<h2>Desenvolvimentos ou participações</h2>';
  const project01 = `<a href="./projetos/project-lessons-learned/lessons-learned.html" target="_blank">Project Lessons Learned</a>`;
  const project02 = `<a href="./projetos/project-pixels-art/pixels-art.html" target="_blank">Project Pixels Art</a>`;
  const project03 = `<a href="./projetos/project-todo-list/todo-list.html" target="_blank">Project To Do List</a>`;
  const projectsOl = `<ol><li>${project01}</li><li>${project02}</li><li>${project03}</li></ol>`;

  displayedContent.innerHTML = projectsIntro + projectsOl;
  createNewImg('./img/projects-logo.png', imgContainer);
}

aboutBtn.addEventListener('click', aboutDisplay);
introBtn.addEventListener('click', welcomeContent);
learnBtn.addEventListener('click', learnDisplay)
projectsBtn.addEventListener('click', projectsDisplay);
window.onload = welcomeContent(), myName();