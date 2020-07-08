function animar(){
  let itens = document.querySelectorAll("[data-a]")
  let windowTop = window.pageYOffset + (window.innerHeight * 0.75)
  itens.forEach((item) => {
    if(item.offsetTop < windowTop){
      item.classList.add("ativo")
    }
  })
}
animar()
window.addEventListener('scroll', animar)