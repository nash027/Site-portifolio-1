  
 // mostrar menu quando clicar // 
 
  var hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show-menu");
 })

// scroll suave para os links internos //

 var menuItems = document.querySelectorAll('.menu a'); //seleciona todas tags 'a' e passa para a var menuItems//

 menuItems.forEach(item => {//foreach é para cada item dentro de menuItems//
    item.addEventListener('click', scrollClick); //seta evento click em cada item do menuItems, ativando função 'scrollclick' no click//
  })

  function scrollClick(event) { //função ativada no click, event é um argumento com vários parametros//

   event.preventDefault(); // tira o comportamento padrao do elemento //

   const element = event.target; //target é parametro do agrumento event, seta o id específico do elemento clicado//
   const id = element.getAttribute('href'); //pega o href(id) dos element//
   const section = document.querySelector(id).offsetTop; //offset para descobrir a qual distancia os id(href das seções) estão do top da pagina //

    window.scroll({ //faz o scroll para a seção//
      top: section - 77, //define o topo do scroll como -77px do topo da seção
      behavior: "smooth",//faz o scroll suave//
    });
  }