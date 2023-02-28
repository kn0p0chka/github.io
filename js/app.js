const $menu= document.querySelector(".header-container")
const $hamburger = document.querySelector(".hamburger");
const $btnOpenModal = document.querySelector(".hat-btn")
const $btnCloseModal = document.querySelector(".modal-close")
const $modal = document.querySelector(".modal")
const $menuTransform= document.querySelector(".navigation-menu")



$hamburger.addEventListener("click", function() {
    $hamburger.classList.toggle("is-active");
    $menuTransform.classList.toggle("open")
    document.body.classList.toggle("open")
    
});


$btnOpenModal.addEventListener("click", function(){
    $modal.classList.remove("hide")
})

$btnCloseModal.addEventListener("click", function(){
    $modal.classList.add("hide")
})

$modal.addEventListener("click", function(){
    $modal.classList.add("hide")
})

$modal.querySelector(".modal-window").onclick=function(event){
  
    event.stopPropagation()
}


