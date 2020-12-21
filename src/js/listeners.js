document.getElementById("encinoso-logo").addEventListener("click", function () {
  showContent("webContent", "indexContent");
});

document.getElementById("btn-toExpo").addEventListener("click", function () {
  showContent("webContent", "expo");
});

document.getElementById("btn-toFerre").addEventListener("click", function () {
  showContent("webContent", "ferre");
});

document.getElementById("initialContentLink").addEventListener("click", function () {
    showContent("content", "init_content");
});

document.getElementById("locationLink").addEventListener("click", function () {
  showContent("content", "location_content");
});

document.getElementById("contact_link").addEventListener("click", function () {
  showContent("content", "contact_content");
});

function showContent(container, content) {
  var children = document.getElementById(container).children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].id != content) {
      document.getElementById(children[i].id).style.display = "none";
      if (container == "content") {
        document.getElementById(children[i].id).style.visibility = "hidden";
        document.getElementById(children[i].id).style.opacity = 0;
      }
    } else {
      document.getElementById(children[i].id).style.display = "block";
      if (container == "content") {
        document.getElementById(children[i].id).style.visibility = "visible";
        document.getElementById(children[i].id).style.opacity = 1;
      }
    }
  }
}
