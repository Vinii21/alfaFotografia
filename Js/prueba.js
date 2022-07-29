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
    console.log('funciono')
})