$(document).ready(function() {
    $('.section-element').click(function() {

        if($(this).hasClass('open')) {
            $(this).removeClass('open');   
            $(this).find('.content').slideUp();

        } else {
            $(this).addClass('open');   
            $(this).find('.content').slideDown();
        };           
    });
});