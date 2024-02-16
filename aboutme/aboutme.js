


function handleEvents () {
    let showdiv = document.querySelector('.headershow__contentjs');
    showdiv.addEventListener('click', muestraDiv);
    showdiv.addEventListener('mouseover', muestraDiv);
    showdiv.addEventListener('mouseout', hideDiv);
    let boton = document.querySelector ('.boton__responsive');
    boton.addEventListener ('click', apareceMenu);
    
    let botonfooter = document.getElementById ('footer__pinterest');
    botonfooter.addEventListener ('mouseover', animaFooter);
    botonfooter.addEventListener ('mouseout', stopFooter);
   
    let botonfooterb = document.getElementById ('footer__twitter');
    botonfooterb.addEventListener ('mouseover', animaFooterb);
    botonfooterb.addEventListener ('mouseout', stopFooterb);
   
    let botonfooterc = document.getElementById ('footer__tiktok');
    botonfooterc.addEventListener ('mouseover', animaFooterc);
    botonfooterc.addEventListener ('mouseout', stopFooterc);

    let highlight = document.getElementById('highlight-text');
    highlight.addEventListener('mouseover', showImage);
    highlight.addEventListener('click', showImage);
    highlight.addEventListener('mouseout', hideImage);
    highlight.addEventListener('click', hideImage);


    let highlightb = document.getElementById('highlight-text2');
    highlightb.addEventListener('mouseover', showImage2);
    highlightb.addEventListener('click', showImage2);
    highlightb.addEventListener('mouseout', hideImage2);
    highlightb.addEventListener('click', hideImage2);


    let highlightc = document.getElementById('highlight-text3');
    highlightc.addEventListener('mouseover', showImage3);
    highlightc.addEventListener('click', showImage3);
    highlightc.addEventListener('mouseout', hideImage3);
    highlightc.addEventListener('click', hideImage3);

    
    let highlightd = document.getElementById('highlight-text4');
    highlightd.addEventListener('mouseover', showImage4);
    highlightd.addEventListener('click', showImage4);
    highlightd.addEventListener('mouseout', hideImage4);
    highlightd.addEventListener('click', hideImage4);
}


function muestraDiv () {
    let showdiv = document.querySelector('.headershow__contentjs');
    showdiv.style.opacity = 0;
    let show = document.querySelector ('.header__hidden');
    show.style.width = '100%';
    

}

function hideDiv () {
    setTimeout(()=> {
    let show = document.querySelector ('.header__hidden');
    show.style.width = 0;
    let showdiv = document.querySelector('.headershow__contentjs');
    showdiv.style.opacity = 100;
}, 3000);

}

function apareceMenu() {
    let lista = document.querySelector ('.list__responsive');
      lista.classList.toggle ('list__responsive--aparece');

   let icono = document.getElementById ('b1')
    if (icono.className == "fa-solid fa-bars"){
     icono.className = "fa-regular fa-x";}
    else {
      icono.className = "fa-solid fa-bars"
    }

}

// FOOTER

let iconopinterest = document.getElementById ('b2');
let iconotwitter = document.getElementById ('b3');
let iconotiktok = document.getElementById ('b4');

 function animaFooter()  {
  if (iconopinterest.className == "fa-brands fa-pinterest-p")
  {iconopinterest.className = "fa-brands fa-pinterest-p fa-bounce";}
}

function animaFooterb()  {
if (iconotwitter.className == "fa-brands fa-twitter")
{iconotwitter.className = "fa-brands fa-twitter fa-bounce";}
}

function animaFooterc()  {
  if (iconotiktok.className == "fa-brands fa-tiktok")
  {iconotiktok.className = "fa-brands fa-tiktok fa-bounce";}
}


function stopFooter() {
  setTimeout(()=> {
    if (iconopinterest.className == "fa-brands fa-pinterest-p fa-bounce")
  { iconopinterest.className = "fa-brands fa-pinterest-p";} 
}, 900);
}

function stopFooterb()  {
  setTimeout(()=> {
  if (iconotwitter.className == "fa-brands fa-twitter fa-bounce")
  {iconotwitter.className = "fa-brands fa-twitter";}
  }, 900);
}

function stopFooterc()  {
  setTimeout(()=> {
  if (iconotiktok.className == "fa-brands fa-tiktok fa-bounce")
  {iconotiktok.className = "fa-brands fa-tiktok";}
  }, 900);
}

//CURSOR

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const animation = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / animation;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / animation;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});




let slideIndex = 1;
showSlides(slideIndex); //Empezamos mostrando la primera diapositiva (slideIndex = 1)

function plusSlides(n) {
  showSlides(slideIndex += n);  //Damos onclick en HTML. La primera slide es -1 por lo que slideIndex+=-1 (1-1=0)
}


function showSlides(n) {

  let i;
  let slides = document.getElementsByClassName("slides__aboutme");
  if (n > slides.length) 
  {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}  //Si supera la longitud de las diapositivas, volvemos a la 1 y viceversa

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"; //slideIndex-1 para obtener la primera diapositiva (0)

}

let image1 = document.getElementById('imagen1');
let image2 = document.getElementById ('imagen2');
let image3 = document.getElementById ('imagen3');
let image4 = document.getElementById ('imagen4');

function showImage () {
  image1.style.opacity = '100%';
}


function hideImage () {
  setTimeout(()=> {
  image1.style.opacity = '0';
  }, 2000)
}

function showImage2 () {
  image2.style.opacity = '100%';
}


function hideImage2 () {
  setTimeout(()=> {
  image2.style.opacity = '0';
  }, 2000)
}


function showImage3 () {
  image3.style.opacity = '100%';
}


function hideImage3 () {
  setTimeout(()=> {
  image3.style.opacity = '0';
  }, 2000)
}

function showImage4 () {
  image4.style.opacity = '100%';
}


function hideImage4 () {
  setTimeout(()=> {
  image4.style.opacity = '0';
  }, 2000)
}

document.addEventListener ('mousemove', parallax);

function parallax (e) {
  document.querySelectorAll(".imageshow").forEach(function(move){
  var moving_value = move.getAttribute('data-value');
  var x = (e.clientX * moving_value) /20;
  var y = (e.clientY * moving_value) /20;
  move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
});
}

window.onload = handleEvents;








