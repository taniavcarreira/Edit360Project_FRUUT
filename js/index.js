
// DISPLAY MENU MEDIAQUERIES
const screenDesktop = window.matchMedia("(min-width: 1024px)")
const screenSize = screenDesktop => {
    if (screenDesktop.matches) { // If media query matches
        document.getElementById("navbar").className = "desktop";
      } else {
          document.getElementById("navbar").className = "";
      }
}
window.onresize = screenSize(screenDesktop)

// HAMBURGUER OPEN
const openMenu = () => {
    const navBar = document.getElementById("navbar")
    const hamburguer = document.getElementById("bars")
    const flagmobile = document.getElementsByClassName("flagmobile")[0]

    if(hamburguer.classList !== "close"){
        navBar.classList.toggle("mobile")
        hamburguer.classList.toggle("close")
        flagmobile.classList.toggle("menu_open")
    } 
}


// //Video 
const video = document.getElementById("video-manifesto");
const videoSobre = document.getElementById("video-sobre");
const videoBg = document.getElementsByClassName("video-bg")[0];
const videoCaption = document.getElementsByClassName("video-caption")[0];
const videoPlay = document.getElementById("videoPlay");
const videoPause = document.getElementById("videoPause");



  const playVid = () => {
    video.classList.remove("hidden")
    videoBg.classList.add("hidden")
    videoCaption.classList.add("hidden") 
    videoPlay.classList.add("hidden") 
    video.play();
  } 
  const playVid1 = () => {
    videoSobre.classList.remove("hidden")
    videoPlay.classList.add("hidden")
    videoPause.classList.remove("hidden")  
    videoSobre.play();
  } 
  const pauseVid = () => {
    videoSobre.classList.remove("hidden")
    videoPause.classList.add("hidden") 
    videoPlay.classList.remove("hidden")
    videoSobre.pause();
  } 


// SLIDESHOW
var slideIndex = 1;
let sliderBanner = document.getElementById('slider_banner')
showSlides(slideIndex,sliderBanner);


function plusSlides(n, slider) {
  showSlides(slideIndex += n, slider);
}

function currentSlide(n, slider) {
  showSlides(slideIndex = n, slider);
}

function showSlides(n, slider) {
  var i;
  var slides = slider.getElementsByClassName("mySlides");
  var dot = document.getElementsByClassName("dot");
  console.log(slider)
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].classList.add("active")
}


// TABS
function tabs(evt, productCategory) {
  let i, x, tablinks;
  x = document.getElementsByClassName("product-category");
  const sliders = document.querySelector('.glide');
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("displaynone");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");

    // var glide = new Glide('.glide', { startAt: 0 }).mount()
    // glide.update({ startAt: 1 })
  }
  //Para resolver o problema da homepage
  document.getElementById(productCategory).classList.remove("displaynone");  
  evt.currentTarget.className += " active";
  var glide = new Glide('.glide', { startAt: 0 }).mount()
  glide.update({ startAt: 1 })
}
































// SlidePoducts

// //Slick Slides
// <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"/>

// <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>    <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
// <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
// <script>
// $('.category-product').slick({
//   dots: false,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 765,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
    
// </script>