document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const phrases = [
  "Desarrollador Backend",
  "Apasionado por Patrones de Diseño",
  ".NET, SQL y buenas prácticas",
  "Contacta conmigo :)",
  "Analista programador"
];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const txtElement = document.querySelector(".animated-text");

function type(){
  if(i >= phrases.length) i = 0;
  const fullTxt = phrases[i];
  if(isDeleting){
    currentPhrase = fullTxt.substring(0, currentPhrase.length-1);
  } else {
    currentPhrase = fullTxt.substring(0, currentPhrase.length+1);
  }
  txtElement.textContent = currentPhrase;

  let typeSpeed = 150;
  if(isDeleting) typeSpeed /= 2;
  if(!isDeleting && currentPhrase === fullTxt){
    typeSpeed = 2000;
    isDeleting = true;
  } else if(isDeleting && currentPhrase === ''){
    isDeleting = false;
    i++;
    typeSpeed = 500;
  }
  setTimeout(type, typeSpeed);
}
type();
