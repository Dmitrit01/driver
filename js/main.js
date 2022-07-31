$(document).ready(function() {
    //Бургер

    // $('.menu__burger').click(function() {
    //     $('.menu__burger,.menu__list').toggleClass('active');
    //     $('body').toggleClass('lock');
    // });

    //Первый слайдер
    $('.slider-works').slick({
        rows:1,
        slidesToShow:3,
        dots:true,
        arrows:false,
        responsive:[
            {
                breakpoint:992.02,
                settings:{
                    slidesToShow:2,
                    dots:true,
                    arrows:false,
                    
                }
            },
            {
                breakpoint:768.02,
                settings:{
                    slidesToShow:1,
                    dots:true,
                    arrows:false,
                    rows:2,
                }
            },
            {
                breakpoint:480.02,
                settings:{
                    slidesToShow:1,
                    dots:true,
                    arrows:false,
                    rows:1,
                }
            }
        ]
    });
    
    //Второй слайдер
    $('.slider-logo').slick({
        dots:true,
        arrows:false,
        slidesToShow: 2,
        rows:2,
        responsive: [
            {
                breakpoint: 374,
                settings: {
                   slidesToShow: 1,
                   rows:1
                }
            },
        ]
    });
    //==============================
    
});

