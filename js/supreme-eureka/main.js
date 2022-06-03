"use strict";

// TODO: Problem 1
//  https://stackoverflow.com/questions/52050294/how-to-set-a-css-font-family-using-jquery-when-the-font-name-has-a-space

// $("body").css({ "font-family": "Arial" });

CORRECT:


$('html').css('font-family', 'Arial');


// TODO: Problem 2

// $("#dark-mode-btn").click(function (event) {
//     event.preventDefault();
//     $("body").toggleClass("dark-mode");
// });

 CORRECT

$('#dark-mode-btn').click(() => $('body').toggleClass('dark-mode'));

// TODO: Problem 3
//  https://stackoverflow.com/questions/20475504/onclick-change-url-using-jquery

$("#to-mdn").on("click", function () {
    window.location.assign(
        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
    );
    return false;
});

// TODO: Problem 4

// setTimeout(function () {
//     $(".popup").addClass(".popup > div").show();
// }, 3000);

 CORRECT

SetTimeout(() => {
    $('.popup').removeClass('hide')
}, 3000)

// // TODO: Problem 5

// $("#dismiss-btn").click(function () {
//     clearTimeout(function () {
//         $(".hide").removeClass(".popup > div");
//     });
// });

 CORRECT

$('#dismiss-btn').click(() => $('.popup').addClass('hide'));

// TODO: Problem 6

// $("a").mouseenter(".link-hover").mouseleave.removeClass(".link-hover");

 CORRECT

$('nav a').hover(() => $(this).toggleClass('link-hover'));

OR

$('a').hover(function() {
        $(this).addClass('link-hover');
}, function () {
    $(this).removeClass('link-hover');
});

// TODO: Problem 7

// $("#add-btn").click(function () {
//     $("#new-data").append("#data");
// });


 CORRECT

$('#add-btn').click(() => {
    $('#data').append(`<div>${$('#new-data).val()}</div>`);
})

// TODO: Problem 8

// $("#clean-data-btn").click(function () {
//     $("#data").append("clean");
// });


 CORRECT

$('#clean-data-btn').click(function() {
    $('#data').each("clean");
})


// TODO: Problem 9

// input.addEventListener('input', updateValue);
//
// function updateValue (e) {
//     if (log.textContent = e.target.value)
//         return $("#login-btn").removeClass("disabled");
// };

//  CORRECT

$('#username').keyup(function() {
    if ($(#username).val() === "") {
        $('#login-btn').attr('disabled', true);
    } else {
        $('#login-btn').attr('disabled', false);
    }
})


// TODO: Problem 10

// $("#search-btn").click(function() {
//     if(Text.search-btn === Text.body)
//         return $(this).addClass
//         ("background": "darkorange");
// } else {
//     return $("background": "#999");
// })


 CORRECT

$('#search-btn').click(function() {
    let query = $('search-text').val();
    $('#data div').each(function () {
        if ($(this).text() === query) {
            $(this).css('background', 'darkorange');
        } else {
            $(this).css('background', '#999');
        }
    })
})

