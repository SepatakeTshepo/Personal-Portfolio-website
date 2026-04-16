const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');
menu.addEventListener('click' , function(){

    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});




const text   = "TSHEPO SEPATAKE";
const target = document.getElementById("Hero_class");

let index    = 0;
let deleting = false;

function type() {
  if (!deleting) {
  
    target.textContent = text.slice(0, index + 1);
    index++;

    if (index === text.length) {
  
      deleting = true;
      setTimeout(type, 1500);   
      return;
    }
    setTimeout(type, 100);  

  } else {
  
    target.textContent = text.slice(0, index - 1);
    index--;

    if (index === 0) {
     
      deleting = false;
      setTimeout(type, 600);  
      return;
    }
    setTimeout(type, 60);       
  }
}

type(); 




 function animateBars(){

    setTimeout (() => {

        document.querySelector(".progress_html").style.width ="90%";
        document.querySelector(".progress_css").style.width = "80%";
        document.querySelector(".progress_javascript").style.width="70%";
        document.querySelector(".progress_java").style.width="82%";
        document.querySelector(".progress_spring-boot").style.width="75%";
        document.querySelector(".progress_SQL").style.width="80%";


    },300);



}

function resetBars(){

  document.querySelector(".progress_html").style.width ="0";
        document.querySelector(".progress_css").style.width = "0";
        document.querySelector(".progress_javascript").style.width="0";
        document.querySelector(".progress_java").style.width="0";
        document.querySelector(".progress_spring-boot").style.width="0%";
        this.document.querySelector(".progress_SQL").style.width="0";

}

const skillsSection = document.querySelector(".Skills");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateBars();   
    } else {
      resetBars();     
    }
  });
}, { threshold: 0.05 }); 

observer.observe(skillsSection);