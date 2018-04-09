const $workSection = $('.work');
const $skillsSection = $('.skills');


$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('.nav-bg').offset().top;
    var ht = $('.nav-bg').height();
    if(scroll > os + ht){
        $workSection.addClass('animated fadeInUp');
    }
});

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     var os = $workSection.offset().top;
//     var ht = $workSection.height();
//     if(scroll > os + ht){
//         $skillsSection.addClass('animated fadeInUp');
//     }
// });
