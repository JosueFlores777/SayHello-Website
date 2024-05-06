

function ejecutarAnimacion() {
    var distanceToFooterTop = document.querySelector('footer').getBoundingClientRect().top;

    if (distanceToFooterTop < window.innerHeight) {
        document.querySelector('.draw-on-scroll-my').style.width = '90%';
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

const scrollRevealConfig = {
    duration: 2000,
    delay: 300,
    reset: true
};

const sr5 = ScrollReveal(scrollRevealConfig);
sr5.reveal(".animatioTopScr2, .animatioTopScr", {
    origin: "top",
    interval: 200, distance: "230px"

});

const sr6 = ScrollReveal({ ...scrollRevealConfig, origin: "bottom", distance: "230px" });
sr6.reveal(".contenServiceFinal", {
    origin: "bottom",
    interval: 200
});

const sr7 = ScrollReveal({ ...scrollRevealConfig, origin: "top", distance: "60px" });
sr7.reveal(".nameService", {
    origin: "top",
    interval: 200
});

document.addEventListener("DOMContentLoaded", function () {
    var bottomNav = document.getElementById('bottom-nav');
    var footer = document.querySelector('footer');
    var footerOffsetTop = footer.offsetTop;

    function handleScroll() {
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition >= footerOffsetTop - window.innerHeight) {
            bottomNav.style.display = 'none';
        } else {
            bottomNav.style.display = 'flex'; 
        }
    }

    window.addEventListener('scroll', handleScroll);
});
