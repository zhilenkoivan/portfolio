
(function () {
    const header = document.querySelector("header");
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    } 
}());


const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.arrow__btn--next',
      prevEl: '.arrow__btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      }
    }
  });
