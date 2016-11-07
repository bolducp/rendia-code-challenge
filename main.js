"use strict";

$(document).ready(init);

function init(){
  playToDayVideo();

}

function showImage() {

}

function playToDayVideo() {
    
    setTimeout(function() {
        $("#to_day_video").get(0).play();
    }, 10000);

}