const navSlide = () => {

  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.social');

  burger.addEventListener('click',()=>{

    nav.classList.toggle('nav-active');

  });


}

navSlide();