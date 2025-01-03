$('.navbar a').on('click',function(e){
    if(this.hash!==''){
        e.preventDefault();
        const hash=this.hash;
        $('html,body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        );
    }
});

$('.modal-line a').on('click',function(e){
  if(this.hash!==''){
      e.preventDefault();
      const hash=this.hash;
      $('html,body').animate(
          {
              scrollTop: $(hash).offset().top
          },
          800
      );
  }
});

// Section for homepage theme (dark/light)
var themesLink1 = document.getElementById('checkbox');
var themesLink2 = document.getElementById('checkbox2');
var body = document.body;
const cielo = document.getElementById("cielo");
const montagne = document.getElementById("montagne");
const terreno = document.getElementById("terreno");

// Event listener for the first checkbox
themesLink1.addEventListener('change', function(event) {
  event.preventDefault();
  body.classList.toggle('dark');
  body.classList.toggle('light');
  if (this.checked) {
    cielo.src = "./Img/cielo-dark.png";
    montagne.src = "./Img/montagne-dark.png";
    terreno.src = "./Img/parellax-dark.png";
  } else {
    cielo.src = "./Img/parellax3.jpg";
    montagne.src = "./Img/montagne.png";
    terreno.src = "./Img/terreno.png";
  }
});

// Event listener for the second checkbox
themesLink2.addEventListener('change', function(event) {
  event.preventDefault();
  body.classList.toggle('dark');
  body.classList.toggle('light');
  if (this.checked) {
    cielo.src = "./Img/cielo-dark.png";
    montagne.src = "./Img/montagne-dark.png";
    terreno.src = "./Img/parellax-dark.png";
  } else {
    cielo.src = "./Img/parellax3.jpg";
    montagne.src = "./Img/montagne.png";
    terreno.src = "./Img/terreno.png";
  }
});


// Section for language swapping on the entire homepage
let currentLanguage='en';
function changeLanguage(){
    const buttonDesktop=document.getElementById('lang');
    const buttonMobile=document.getElementById('lang-mobile');
    if (currentLanguage==='en') {
        buttonMobile.style.backgroundImage = "url('./Img/eng.png')";
        buttonDesktop.style.backgroundImage = "url('./Img/eng.png')";
    currentLanguage='it';
  } else {
    buttonMobile.style.backgroundImage = "url('./Img/it.png')";
    buttonDesktop.style.backgroundImage = "url('./Img/it.png')";
    currentLanguage='en';
  }
const jsonFile = `${currentLanguage}.json`;
  fetch(jsonFile)
    .then(response => response.json())
    .then(data => {
      // Utilizza i dati del file JSON per cambiare la lingua di tutti gli elementi nella pagina
      const elements = document.querySelectorAll('*[data-lang-key]');
      elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (data[key]) {
          element.innerText = data[key];
        }
      });
    })
    .catch(error => console.log(error));
}


// Showcase section for swapping text / background
var showcaseLeft = document.getElementById('walk-left');
var showcaseRight = document.getElementById('walk-right');
var showcaseText = document.getElementById('showcase-text');
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');

showcaseLeft.addEventListener('click', function(event){
  event.preventDefault();
  showcaseText.classList.toggle('fade');
  showcaseText.classList.toggle('walk-left');
  setTimeout(function(){
    if (!t1.classList.contains('hidden')){
      t1.classList.toggle('hidden');
      t4.classList.toggle('hidden');
    } else if (!t4.classList.contains('hidden')){
      t4.classList.toggle('hidden');
      t3.classList.toggle('hidden');
    } else if (!t3.classList.contains('hidden')){
      t3.classList.toggle('hidden');
      t2.classList.toggle('hidden');
    } else {
      t2.classList.toggle('hidden');
      t1.classList.toggle('hidden');
    }
    showcaseText.classList.toggle('fade');
    showcaseText.classList.toggle('walk-left');
  }, 1000);
});

showcaseRight.addEventListener('click', function(event){
  event.preventDefault();
  showcaseText.classList.toggle('fade');
  showcaseText.classList.toggle('walk-right');
  setTimeout(function(){
    if (!t1.classList.contains('hidden')){
      t1.classList.toggle('hidden');
      t2.classList.toggle('hidden');
    } else if (!t2.classList.contains('hidden')){
      t2.classList.toggle('hidden');
      t3.classList.toggle('hidden');
    } else if (!t3.classList.contains('hidden')){
      t3.classList.toggle('hidden');
      t4.classList.toggle('hidden');
    } else if (!t4.classList.contains('hidden')){
      t4.classList.toggle('hidden');
      t1.classList.toggle('hidden');
    }
    showcaseText.classList.toggle('fade');
    showcaseText.classList.toggle('walk-right');
  }, 1000);
});


/*scroll parallax */
gsap.from("#title",{
    scrollTrigger :{
        scrub: true
    },
    y:-85,
})
gsap.from("#cielo",{
    scrollTrigger :{
        scrub: true
    },
    y:-50,
})
gsap.from("#montagne",{
    scrollTrigger :{
        scrub: true
    },
    y:50,
})

gsap.from("#terreno",{
    scrollTrigger :{
        scrub: true,
    },
    y:300,
    
})
gsap.from("#main",{
    scrollTrigger :{
        scrub: true
    },
    y:150,
   x:-80,
})

/*animazione testo*/
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector(".navbar-nav .nav-link[href='#about']");
    const animatedSection = document.querySelector("#about");
    let animationTriggered = false;

    function startAnimation(){
    const typingText = document.getElementById('typing-text');
    typingText.innerHTML = typingText.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const typingText2 = document.getElementById('typing-text2');
    typingText2.innerHTML = typingText2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    const typingText3 = document.getElementById('typing-text3');
    typingText3.innerHTML = typingText3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    gsap.fromTo(
  '.letter',
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 0.05,
    delay: 0.5,
    stagger: 0.05,
    ease: 'power4.out',
  }
);
}

// funzione per scroll automatico
function checkSectionInView() {
    const rect = animatedSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !animationTriggered) {
      startAnimation();
      animationTriggered = true;
    }
  }

aboutLink.addEventListener("click", function(event) {
    startAnimation();
  });
  window.addEventListener("scroll", checkSectionInView);
  checkSectionInView();
});


//height mobile
var windowHeight = window.innerHeight;
var windowWidth=window.innerWidth;
var element = document.querySelector('.modal.content .parellax #showcase #about');
element.style.height = windowHeight + 'px';
element.style.width=windowWidth+'px';

