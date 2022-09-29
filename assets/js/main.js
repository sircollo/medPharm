// window.onscroll = () => {
//   const nav = document.querySelector('#navbar');
//   if(this.scrollY <= 10){
//     nav.className = 'navbar'; 
//   }
//   else nav.className = 'navy';
// };

// $(document).ready(function(){
// (window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 10) {
// 	    $("#navbar").css("background" , "#987 !important");
// 	  }

// 	  else{
// 		  $("#navbar").css("background" , "");  	
// 	  }
//   })
// })
// window.onscroll = () => {
//   const nav = document.querySelector('#navbar');
//   if(this.scrollY <= 10){
//     nav.css("background" , "#987 !important"); 
//   }
//   else nav.css("background" , "#333333");  
// };

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   console.log("clicked")
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
// const navLink = document.querySelectorAll(".nav-link");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
var faders = document.querySelectorAll(".fade-in");
function scrollServices(){
  window.scrollTo(0,1500);
}
function scrollAbout(){
  window.scrollTo(0,2200);
}
function scrollWin(){
  window.scrollTo(0,2000);
}
function scrollContact(){
  window.scrollTo(0,2700);
}
function scrollDoctors(){
  window.scrollTo(0,650);
}


// window.addEventListener('scroll',()=>{
//   const scrolled = window.scrollY;
//   console.log(scrolled)
// });
var appearOptions = {
  // threshold:1,
  // rootMargin: "0px 0px -100px 0px"
};
var appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  console.log(entries)
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target)
      }
    })
  },appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});