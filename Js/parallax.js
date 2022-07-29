$(document).ready(function(){

    $(window).scroll(function(){
        let windowWidth = $(window).width();

        if(windowWidth > 900){
            let scroll = $(window).scrollTop();

            $('header .contenedor').css({
                'transform': 'translate(0px, -' + scroll / 5 + '%)'
            });
            $('.nosotros .contenedor .cont-info').css({
                'transform': 'translate(0px, -' + scroll / 12 + '%)'
            });
        }

    });

    $(window).resize(function(){
        let windowWidth = $(window).width();

        if(windowWidth > 900){
            $('nosotros .contenedor .cont-info').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});

