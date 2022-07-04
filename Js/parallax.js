$(document).ready(function(){

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 900){
            var scroll = $(window).scrollTop();

            $('header .contenedor').css({
                'transform': 'translate(0px, -' + scroll / 5 + '%)'
            });
            $('.nosotros .contenedor .cont-info').css({
                'transform': 'translate(0px, -' + scroll / 12 + '%)'
            });
        }

    });

    $(window).resize(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 900){
            $('nosotros .contenedor .cont-info').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});

