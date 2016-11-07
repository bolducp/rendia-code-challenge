"use strict";

$(document).ready(init);

function init(){
    transitionToNightVideo();
    transitionNightImage();
    transitionToDayVideo();
}

function transitionToNightVideo() {
    setTimeout(function() {
        $('#to_night_video').addClass('animated fadeOutRight');
    }, 12000);
}

function transitionNightImage() {
    setTimeout(function() {
        $('#to_night_video').remove();
        $("#night").show().addClass('animated fadeInLeft');
    }, 12400);

    setTimeout(function() {
        $("#night").addClass('animated fadeOutRight');
    }, 22400);
}

function transitionToDayVideo() {
    setTimeout(function() {
        $('#night').remove();
        $("#to_day_video").show().addClass('animated fadeInLeft');
        $("#to_day_video").get(0).play();
    }, 22800);
}