

function anadirEventos (){
  let slider =  document.getElementById('mainSlider');
  slider.addEventListener ('wheel', scrollHorizontal);


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
 
}




// MENU

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


//SLIDER

function scrollHorizontal(e) {
    e.preventDefault();
    let slider =  document.getElementById('mainSlider');
    slider.scrollLeft += e.deltaY;
   
}


let slider = document.querySelector('.slider');
let isDown = false;
let startX;
let sLeft;




slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  sLeft = slider.scrollLeft;
});


slider.addEventListener('mouseleave', () => {
  isDown = false;
});


slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const dragged = x - startX;
  slider.scrollLeft = sLeft - dragged;
}); 



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

window.onload = anadirEventos;

