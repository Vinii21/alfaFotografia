$(document).ready(function(){
    /* EFECTO MENU */
    $('nav a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
    
        $(this).animate({
            top: '0'
        }, 1000 + (index * 500));   
    });

    /* EFECTO HEADER */
    if( $(window).width() > 800 ){
        $('header .contenedor').css({
            opacity: '0',
            marginTop: '0'
        });
        $('header .contenedor').animate({
            opacity: '1',
            marginTop: '-40px'
        }, 1500);
    };

    /* Efectos scroll menu */
    var sobreMi = $('#nosotros').offset().top,
        galeria = $('#galeria').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn-sobreMi').on('click', function(e){
        e.preventDefault();
        if( $(window).width() > 850 ){
            $('html, body').animate({
                scrollTop: sobreMi - 250
            }, 500)
        };
        if( $(window).width() < 850 ){
            $('html, body').animate({
                scrollTop: sobreMi - 150
            }, 500)
        };
        
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        if( $(window).width() > 800 ){
            $('html, body').animate({
                scrollTop: galeria - 100
            }, 500)
        };
        if( $(window).width() > 850 ){
            $('html, body').animate({
                scrollTop: galeria - 100
            }, 500)
        };
        if( $(window).width() < 850 ){
            $('html, body').animate({
                scrollTop: galeria - 60
            }, 500)
        };
        if( $(window).width() < 500 ){
            $('html, body').animate({
                scrollTop: galeria - 30
            }, 500)
        };
    });

    $('#btn-contacto').on('click', function(e){
        e.preventDefault();
        if( $(window).width() > 850 ){
            $('html, body').animate({
                scrollTop: contacto - 100
            }, 500)
        }
        if( $(window).width() < 850 ){
            $('html, body').animate({
                scrollTop: contacto - 10
            }, 500)
        }
        if( $(window).width() < 500 ){
            $('html, body').animate({
                scrollTop: contacto 
            }, 500)
        }
        
    });
})