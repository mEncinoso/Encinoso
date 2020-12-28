import "bootstrap";
import $ from "jquery";
import "./listeners";
import "./bootstrap-props.js";

//Change content margin-top depending on nav-bar header height (on load and rezising)
document.getElementById("btn-toExpo").addEventListener("click", function () {
  setPaddingTop("expo");
});

$(window).on("resize", function () {
  setPaddingTop("expo");
});

document.getElementById("btn-toFerre").addEventListener("click", function () {
  setPaddingTop("ferre");
});

$(window).on("resize", function () {
  setPaddingTop("ferre");
});

function setPaddingTop(id) {
  if (id == "expo" || id == "ferre") {
    var content_padding_top;
    content_padding_top = $("#" + id + "_header").height();
    $("#" + id + "_carousel").css("padding-top", content_padding_top);
  }
}
