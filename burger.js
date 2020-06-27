function burgerMenu() {
    let menu = document.querySelector(".site-nav")
    menu.classList.toggle("toggleMenu")
  }
  
  let burger = document.querySelector(".burger")
  
  burger.addEventListener("click", burgerMenu)