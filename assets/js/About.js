const scrollers = document.querySelectorAll(".scrollerAbout");

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
}

/*Equipo de trabajo*/


$(window).scroll(function () {
    var sectionAbout3Top = $('.sectionAbout3').offset().top;
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var scrollNew = scrollTop;

    if (sectionAbout3Top <= (scrollTop + windowHeight)) {
        var parallax = (scrollNew/7);
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
           
            }else if ($(window).width() <= 478) {
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
        document.querySelector('.draw-on-scroll-my').style.width = '90%';
        document.querySelector('.draw-on-scroll3').style.width = '80%';
        document.querySelector('.draw-on-scroll4').style.width = '80%';
        document.querySelector('.draw-on-scroll2').style.width = '50%';
        document.querySelector('.draw-on-scroll2').style.right = '0';
    } else {
        document.querySelector('.draw-on-scroll-my').style.width = '0';
       document.querySelector('.draw-on-scroll2').style.width = '0';
        document.querySelector('.draw-on-scroll2').style.right = '0';
    }
}

window.addEventListener('load', function () {
    ejecutarAnimacion();
});

window.addEventListener('scroll', function () {
    ejecutarAnimacion();
});

