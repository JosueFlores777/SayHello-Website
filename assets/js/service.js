var video = document.getElementById('video1');
var isVideoPlaying = video && !video.paused;

function selectBox(index) {
    event.preventDefault();
    document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7";
    document.getElementById("fullscreen-background").style.zIndex = 10;
    document.getElementById("scrollerWork").style.display = "block";
    
    if (video) {
        isVideoPlaying = !video.paused;
        if (isVideoPlaying) {
            video.pause(); 
        }
    }
}

function clearSelection() {
    if (video) {
        if (isVideoPlaying) {
            video.play(); 
        } else {
            video.pause();
        }
    }

    document.getElementById("scrollerWork").scrollTop = 0;
    document.getElementById("scrollerWork").style.display = "none";
    document.getElementById("fullscreen-background").style.zIndex = -6;
    document.getElementById("fullscreen-background").style.backgroundColor = "black";
}

document.getElementById("scrollerWork").addEventListener("scroll", function () {
    var scrollPosition = this.scrollTop;
    var paddingValue;
    if (window.innerWidth < 478) {
        paddingValue = scrollPosition > 0 ? 0 : 30;
    } else {
        paddingValue = scrollPosition > 0 ? 0 : 60;
    }
    this.style.transition = "padding-left 0.4s ease, padding-right 0.4s ease";
    this.style.padding = paddingValue + "px";
});

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

/*


*/
