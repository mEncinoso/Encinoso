document.getElementById("expo-encinoso-logo").addEventListener("click", function () {
  showContent("webContent", "indexContent");
});

document.getElementById("ferre-encinoso-logo").addEventListener("click", function () {
  showContent("webContent", "indexContent");
});

document.getElementById("btn-toExpo").addEventListener("click", function () {
  showContent("webContent", "expo");
});

document.getElementById("expo_initialContentLink").addEventListener("click", function () {
    showContent("expo_content", "expo_init_content");
});

document.getElementById("expo_locationLink").addEventListener("click", function () {
  showContent("expo_content", "expo_location_content");
});

document.getElementById("expo_contact_link").addEventListener("click", function () {
  showContent("expo_content", "expo_contact_content");
});


document.getElementById("btn-toFerre").addEventListener("click", function () {
  showContent("webContent", "ferre");
});

document.getElementById("ferre_initialContentLink").addEventListener("click", function () {
  showContent("ferre_content", "ferre_init_content");
});

document.getElementById("ferre_locationLink").addEventListener("click", function () {
showContent("ferre_content", "ferre_location_content");
});

document.getElementById("ferre_contact_link").addEventListener("click", function () {
showContent("ferre_content", "ferre_contact_content");
});

function showContent(container, content) {
  var children = document.getElementById(container).children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].id != content) {
      document.getElementById(children[i].id).style.display = "none";
      if (container == "content" || container == "ferre_content") {
        document.getElementById(children[i].id).style.visibility = "hidden";
        document.getElementById(children[i].id).style.opacity = 0;
      }
    } else {
      document.getElementById(children[i].id).style.display = "block";
      if (container == "expo_content" || container == "ferre_content") {
        document.getElementById(children[i].id).style.visibility = "visible";
        document.getElementById(children[i].id).style.opacity = 1;
      }
    }
  }
}
