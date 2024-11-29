//Funcion ScrollY 
const header = document.getElementById('header');

  window.addEventListener('scroll', sombraMenu); 

  function sombraMenu(e){
    e.preventDefault;
    valorScroll = window.scrollY;
    valorScroll > 0 ? header.classList.add('menu-show') : header.classList.remove('menu-show')
  }
  

//   const menuOpen = document.getElementById('menuOpen');
//   const menuX = document.getElementById('menuX');

//   menuOpen.addEventListener('click', function(e){
//       menuOpen.classList.remove('d-block')
//       menuOpen.classList.add('d-none')
//       menuX.classList.remove('d-none');
//       menuX.classList.add('d-blcok');
//   });
