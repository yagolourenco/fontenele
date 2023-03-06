const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1) {
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){
    hideSlider()
    if(currentSlide === 0) {
        currentSlide = slider.length -1;
    }else{
        currentSlide--;
    }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

setInterval(nextSlider, 2000);


/*<!------------------------------------------------------------------------- Navbar  ----------------------------------------------------------------->*/



function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let mexebaixo = document.getElementById('showcase');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        mexebaixo.style.height = "90vh";
        document.querySelector('.icon-menu').src = "img/menu_white_36dp.svg";
        
    } else {
        mexebaixo.style.height = "110vh";
        menuMobile.classList.add('open');
        document.querySelector('.icon-menu').src = "img/close_white_36dp.svg";

    }

}
/*<!------------------------------------------------------------------------- Dúvidas  ----------------------------------------------------------------->*/



function showmore() {
    let abredivimagem = document.querySelector('.mostramais');
    //let abredivimagem_dois = document.querySelector('.dobtn');
    let btnabredivimagem = document.querySelector('#btnLeiaMais');

    if (abredivimagem.classList.contains('opendiv')) {
        abredivimagem.classList.remove('opendiv');
        abredivimagem.style.overflow="hidden";
        btnLeiaMais.innerHTML = 'Veja Mais';
        //btnabredivimagem.classList.remove('openbtnum');
        //btnLeiaMais.innerHTML = '<i class="fa-solid fa-regular fa-circle-arrow-down fa-2x color-primary"></i>';
        
    } else {
        abredivimagem.classList.add('opendiv');
        abredivimagem.style.overflow="visible";
        abredivimagem.style.animation = "fadeIn 2s";
        btnLeiaMais.innerHTML = 'Veja Menos';
        window.sr = ScrollReveal({
            reset: false,
            distance: '60px',
            duration: 1000,
            delay:400
        });
    }
}


/*<!------------------------------------------------------------------------- scrollreveal  ----------------------------------------------------------------->*/
window.sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay:00,
    interval: 16,
});


/*Quem sou eu*/ 

sr.reveal('.headline1',{
    origin: 'left',
    delay:200,
});


sr.reveal('.pai-operadoras',{
    rotate: {x: 0, y: 80, z: 0},
});

sr.reveal('.gallery-image',{
    origin: 'bottom',
    delay: 200,
});

sr.reveal('.pai-frases',{
    origin: 'left',
    delay: 200,
});


sr.reveal('.headline2',{
    origin: 'left',
});

sr.reveal('#testimonials-container',{
    rotate: {x: 0, y: 80, z: 0},
    
});


/*Quer mais clientes*/ 
sr.reveal('.itens', {
    rotate: {x: 0, y: 80, z: 0},
    duration:700
});

/*Quer mais clientes?*/ 
sr.reveal('#features-container',{
    rotate: {x: 0, y: 80, z: 0},
    
});

sr.reveal('.headline',{
    rotate: {x: 0, y: 80, z: 0},
    
});

/*Nosso serviço*/
sr.reveal('#product-container',{
    rotate: {x: 0, y: 80, z: 0},
    
});




/*Serviços adicionais*/ 

sr.reveal('.titulo_do_servico',{
    rotate: {x: 0, y: 80, z: 0},
    
});

sr.reveal('#servico-container',{
    rotate: {x: 0, y: 80, z: 0},
    
});
/*Formulário*/ 
sr.reveal('.formuesquerda',{
    rotate: {x: 0, y: 80, z: 0},
    
});

sr.reveal('.formu',{
    rotate: {x: 0, y: 80, z: 0},
    
});








