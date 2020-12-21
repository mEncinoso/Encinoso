import "bootstrap";
import $ from "jquery";
import "./listeners";
import "./bootstrap-props.js";

//Change content margin-top depending on nav-bar header height (on load and rezising)
document.getElementById("btn-toExpo").addEventListener("click", function(){
  setPaddingTop("expo");
});
/*$(window).on("load", function(){
    setPaddingTop("expo");
});*/

$(window).on("resize", function () {
    setPaddingTop("expo");
});

function setPaddingTop(id){
  if(id=="expo"){
    var content_padding_top;
    content_padding_top = $("header").height();
    $("#carousel").css("padding-top", content_padding_top);
  }
}

/*$(document).scroll(function() {
    $('#header').css({width: $(this).scrollTop() > 100? "50%":"100%"});
});*/

//Resize nav-bar size when scroll is not at top
/*var scroll;
var upper_height = 10;
var lower_height = 5;

$(window).on("scroll", function () {
  scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#header").css("height", lower_height + "%");
  } else {
    $("#header").css("height", upper_height + "%");
  }
  setPaddingTop();
});*/





