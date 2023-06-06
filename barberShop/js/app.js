const swiper = document.querySelector(".swiper");
const $menu= document.querySelector(".header-container")
const $hamburger = document.querySelector(".hamburger");
const $menuTransform= document.querySelector(".navigation")
const inputTel = document.querySelector(".forma-number");

new Swiper(swiper, {
  loop: true,
   direction: "horizontal",
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl:document.querySelector( ".swiper-button-next"),
    prevEl:document.querySelector (".swiper-button-prev"),
  },
   breakpoints: {
    1200:{
      slidesPerView: 4,
   spaceBetween: 20,
    },
    769: {
     slidesPerView: 3,
     spaceBetween: 15,
    },
    480:{
      slidesPerView: 2,
   spaceBetween: 10,
    }
   }
});

if(inputTel!==null){
  const im = new Inputmask("+1 (999)999-99-99");
  im.mask(inputTel);

  console.log(inputTel)
}



$hamburger.addEventListener("click", function() {
    $hamburger.classList.toggle("is-active");
    $menuTransform.classList.toggle("open")
    document.body.classList.toggle("open")
    
});


