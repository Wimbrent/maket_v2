
let button_subscribe = document.querySelector('.button_subscribe'),
    input_email = document.querySelector('.footer_newsletter_subscribe'),
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

function validateEmail(input_email) {
    return re.test(input_email);
}
button_subscribe.addEventListener("click", validateEmail); 

$(document).ready(function(){
    $('.slider_container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});

