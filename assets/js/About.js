const scrollers = document.querySelectorAll(".scrollerAbout");
const scrollers1 = document.querySelectorAll(".scrollerHome");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerAbout__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });

  scrollers1.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerHome__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/*Equipo de trabajo*/


$(window).scroll(function () {
    var sectionAbout3Top = $('.sectionAbout3').offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollNew = scrollTop;

    if (sectionAbout3Top <= (scrollTop + windowHeight)) {
        var parallax = (scrollNew/6);
        if ($(window).width() <= 1024) {

            if ($(window).width() <= 845) {
                $("figure:nth-child(2)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(4)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(6)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(8)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(10)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(12)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(14)").css("transform", "translateY(" + (parallax-250) + "px)");            
                $("figure:nth-child(16)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(18)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(20)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(22)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(24)").css("transform", "translateY(" + (parallax-250) + "px)");
           
            }else if ($(window).width() <= 658) {
                $("figure:nth-child(2)").css("transform", "none");
                $("figure:nth-child(4)").css("transform", "none");
                $("figure:nth-child(6)").css("transform", "none");
                $("figure:nth-child(8)").css("transform", "none");
                $("figure:nth-child(10)").css("transform", "none");
                $("figure:nth-child(12)").css("transform", "none");
                $("figure:nth-child(14)").css("transform", "none");            
                $("figure:nth-child(16)").css("transform", "none");
                $("figure:nth-child(18)").css("transform", "none");
                $("figure:nth-child(20)").css("transform", "none");
                $("figure:nth-child(22)").css("transform", "none");
                $("figure:nth-child(24)").css("transform", "none");
           
            }else{
                $("figure:nth-child(2)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(5)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(8)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(8)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(11)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(14)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(17)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(20)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(23)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(26)").css("transform", "translateY(" + (parallax-250) + "px)");
                $("figure:nth-child(29)").css("transform", "translateY(" + (parallax-250) + "px)");
             
            }
    } else {
            $("figure:nth-child(2)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(4)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(6)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(8)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(10)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(12)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(13)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(15)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(17)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(19)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(21)").css("transform", "translateY(" + (parallax-250) + "px)");
            $("figure:nth-child(23)").css("transform", "translateY(" + (parallax-250) + "px)");
          }
      
    }
});


/* */

function ejecutarAnimacion() {
    var distanceToFooterTop = document.querySelector('footer').getBoundingClientRect().top;

    if (distanceToFooterTop < window.innerHeight) {
        document.querySelector('.draw-on-scroll-my').style.width = '91%';
        document.querySelector('.draw-on-scroll6').style.width = '50%';
        document.querySelector('.draw-on-scroll3').style.width = '80%';
        document.querySelector('.draw-on-scroll4').style.width = '80%';
        document.querySelector('.draw-on-scroll').style.width = '50%';
        document.querySelector('.draw-on-scroll2').style.right = '50%';
    } else {
        document.querySelector('.draw-on-scroll-my').style.width = '0';
        document.querySelector('.draw-on-scroll6').style.width = '0';
    }
}

window.addEventListener('load', function () {
    ejecutarAnimacion();
});

window.addEventListener('scroll', function () {
    ejecutarAnimacion();
});



/* testi*/

/*Card TestymoHome */
const cardStack = document.querySelector('.cardPageTestiHome-stack');
let cards = Array.from(cardStack.children);

function startFlipping() {
  // Array de colores para cada tarjeta
  const colors = ['#805313', '#e1b911', '#f8ef70'];

  setInterval(() => {
    const lastCard = cards.pop();
    cards.unshift(lastCard);
    cards.forEach((card, index) => {
      const newIndex = (index + 1) % cards.length;
      card.style.top = `${newIndex * -50}px`;
      card.style.transform = `scale(${1 - newIndex * 0.09})`;
      card.style.zIndex = cards.length - newIndex;
      card.style.backgroundColor = colors[newIndex];
      if (index === 1) {
        card.style.backgroundColor = '#f8ef70';
      }
      if (newIndex === 0) {
        card.classList.add('animate__animated', 'animate__zoomInDown');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__zoomInDown');
        }, 1000); 
        
      }
      if (newIndex === 1) {
        card.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }, 500); 
      }
      if (newIndex === 2) {
        card.classList.add('animate__animated', 'animate__fadeIn');
        setTimeout(() => {
          card.classList.remove('animate__animated', 'animate__fadeIn');
        }, 500); 
      }
    });
  }, 4100);
}

startFlipping();



/*Carrucel about */


