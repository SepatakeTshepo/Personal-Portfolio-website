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