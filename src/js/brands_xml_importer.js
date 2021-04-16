import $ from "jquery";
import expo_brands from "../data/expo-brands.xml";
import ferre_brands from "../data/ferre-brands.xml";

$(function(){
  generateBrandLogos(ferre_brands, "ferre");
  generateBrandLogos(expo_brands, "expo");
});

function generateBrandLogos(brands, id){
  var htmlToAppend = "";
  var counter = 4;
  
  $(brands).find("brand").each(function () {
    var title = $(this).find("title").text(),
    alt = $(this).find("alt").text(),
    img_url = $(this).find("img_url").text(),
    url = $(this).find("url").text();

    if(counter == 4){
      htmlToAppend+="<div class=\"row brand_logo_row\">";
    }

    htmlToAppend+="<div class=\"col-md-3 col-6\">";
    htmlToAppend+="<a href=\""+url+"\" title=\""+title+"\" target=\"_blank\">"
    +"<img loading=\"lazy\" src=\""+img_url+"\" title=\""+title+"\" alt=\""+alt+"\" class=\"brand_logo\"/></a></div>";

    if(counter==1){
      htmlToAppend+="</div>";
    }
    counter--;

    if(counter==0){
      counter = 4;
    }
  });

  switch(id){
    case "expo":
      $("#expo-brands-logos-container").append(htmlToAppend);
      break;
    case "ferre":
      $("#ferre-brands-logos-container").append(htmlToAppend);
      break;
  }
}