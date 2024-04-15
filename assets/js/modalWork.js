var boxes = [
    {
      typeWork: 'Website Development',
      image: 'https://source.unsplash.com/uAgLGG1WBd4/900x900',
      titleModal: 'Hotel Equinoccio',
      Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
      cardText: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam. Sed lectus felis, feugiat ut turpis vel, convallis aliquam eros. Nam scelerisque nec eros sit Lorem ipsum dolor sit amet, consectetur  aliquam sed quam. Sed lectus felis, feugiat ut turpis vel, convallis aliquam eros. Nam scelerisque nec eros sit',
      
      imgcard1:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard2:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard3:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard4:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
    },
    {
      typeWork: 'Branding & Logo Desing',
      image: 'https://images.unsplash.com/photo-1712675670807-f925abe035b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      titleModal: 'Visible Talent',
      Subtitle: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam.',
      cardText: 'Lorem ipsum dolor sit amet, consectetur  aliquam sed quam. Sed lectus felis, feugiat ut turpis vel, convallis aliquam eros. Nam scelerisque nec eros sit Lorem ipsum dolor sit amet, consectetur  aliquam sed quam. Sed lectus felis, feugiat ut turpis vel, convallis aliquam eros. Nam scelerisque nec eros sit',
      
      imgcard1:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard2:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard3:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',
      imgcard4:'https://images.pexels.com/photos/9482920/pexels-photo-9482920.jpeg?auto=compress&cs=tinysrgb&w=660&h=650&dpr=1',

    },

  ];
  function selectBox(index) {
    document.getElementById("fullscreen-background").style.backgroundColor = "#343333a7"; 
    document.getElementById("fullscreen-background").style.zIndex = 10;
    var selectedBox = boxes[index - 1];
    document.getElementById("scrollerWork").style.display = "block";
    document.getElementById("workcardModal").textContent= selectedBox.typeWork;
    document.getElementById("titleModal").textContent = selectedBox.titleModal;
    document.getElementById("titleWork").textContent = selectedBox.Subtitle;
    document.getElementById("cardText").textContent = selectedBox.cardText;

    document.getElementById("imgcard1").src = selectedBox.imgcard1;
    document.getElementById("imgcard2").src = selectedBox.imgcard2;
    document.getElementById("imgcard3").src = selectedBox.imgcard3;
    document.getElementById("imgcard4").src = selectedBox.imgcard4;

  }

  function clearSelection() {

    document.getElementById("scrollerWork").scrollTop = 0;
    document.getElementById("scrollerWork").style.display = "none";
    document.getElementById("fullscreen-background").style.zIndex = -6;
    document.getElementById("fullscreen-background").style.backgroundColor = "black";
  
  }

  document.getElementById("scrollerWork").addEventListener("scroll", function () {
    var scrollPosition = this.scrollTop;
    if (window.innerWidth < 478) {
      paddingValue = scrollPosition > 0 ? 0 : 30;
    } else {
      paddingValue = scrollPosition > 0 ? 0 : 60;
    }
    this.style.padding = paddingValue + "px";
  });

  window.addEventListener('scroll', function() {
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
});