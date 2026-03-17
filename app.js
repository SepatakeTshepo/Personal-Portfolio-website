const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navbar_menu');
menu.addEventListener('click' , function(){

    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});


/*Home section*/

/*const title = document.querySelector('#hero_title');
const message = ["HI ITS ME", "TSHEPO SEPATAKE"];

let messageIndex= 0;
let characterIndex = 0;
let isDeleting = false ;

function typeWriter(){

    const currentMessage = message[messageIndex];

    if (!isDeleting){

        title.innerHTML = currentMessage.substring(0, characterIndex + 1 );
        characterIndex++;

        if (characterIndex === currentMessage.length){

            isDeleting=true;
            setTimeout(typeWriter, 1500);
            return;
        }
    }else{

        title.innerHTML = currentMessage.substring (0, characterIndex - 1);
        characterIndex--;

        if (characterIndex ===0 ){

            isDeleting=false ;
            messageIndex = (messageIndex + 1 ) % message.length;
            setTimeout(typeWriter , 500);
            return ;



        }




    }

    setTimeout(typeWriter , isDeleting ?50 : 100);
}

typeWriter();*/

const title = document.querySelector('#hero_title');

const line1 = "HI ITS ME ";
const line2 = "TSHEPO SEPATAKE";

let charIndex = 0;
let isDeleting = false ;
let currentLine = 1;

function typeWriter(){

    if (!isDeleting){
 if (currentLine ===1){

    title.innerHTML = line1.substring (0 , charIndex + 1)+ "<br>" ;
    charIndex++;

    if (charIndex ===line1.length){
        currentLine=2;
        charIndex=0;
        setTimeout(typeWriter,300);
        return;
    }

 }else {

    title.innerHTML=line1 + "<br>" + line2.substring(0,charIndex + 1);
    charIndex++;

    if (charIndex === line2.length){

        isDeleting=true;
        currentLine=1;
        charIndex=line1.length;
        setTimeout(typeWriter , 1500);
        return;
    }
 }
} else {

    if (currentLine===1){
        title.innerHTML = line1.substring(0, charIndex - 1) + "<br>" + line2 ;
        charIndex--;
    
 
    if (charIndex===0){
        currentLine=2;
        charIndex = line2.length;
        setTimeout(typeWriter,300);
        return;
    }

}else {

    title.innerHTML = line2.substring(0 , charIndex - 1);
    charIndex--;

    if (charIndex === 0){

        isDeleting=false ;//start everthing deleted again
        currentLine = 1 ;
        charIndex = 0 ;
        setTimeout(typeWriter ,500);
        return;
    }


}

}

setTimeout(typeWriter , isDeleting ? 50 : 100);
}

typeWriter();

/* Skills progress bars fill ups */


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