/* Website Created by Jedd Morgan for Unit 28 Website Production - Assignment 3 */

//Gallary script
var dir = "Images/gallery1/";
var x = 0;
var image = [];
image[0] = dir + "img1.jpg";
image[1] = dir + "img2.jpg";
image[2] = dir + "img3.jpg";
image[3] = dir + "img4.jpg";
image[4] = dir + "img5.jpg";
image[5] = dir + "img6.jpg";
image[6] = dir + "img7.jpg";
image[7] = dir + "img8.jpg";
image[8] = dir + "img9.jpg";
image[9] = dir + "img10.jpg";
image[10] = dir + "img11.jpg";
image[11] = dir + "img12.jpg";
var number = 4;
             
function Next_Image(imagecount, translation) {
    "use strict";
    if (x + translation > imagecount - 1) {
        x = 0;
    } else if (x + translation < 0) {
        x = imagecount - 1;
    } else {
        x = x + translation;
    }
    document.getElementById("img").src = image[x];
}

function Init_Image_Timer(i, t) {
    "use strict";
    var imagecout = i;
    var translation = t;
    setInterval( function() { Next_Image(imagecout, translation); }, 12000 );
}


/* Sticky Nav Script
   Seondary Source   */
$(document).ready(function() {
    var stickyNavTop = $('#nav').offset().top;

    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#nav').addClass('sticky');
        } else {
            $('#nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});

//Form

function show_form() {
document.getElementById('form').style.display = "block";
}
function hide_form() {
document.getElementById('form').style.display = "none";
}
function conf() {
window.alert("Booking confirmed");
}
//gallery page
function show_gallery() {
document.getElementById('navigation-arrows').style.display = "block";
}
function hide_gallery() {
document.getElementById('navigation-arrows').style.display = "none";
}