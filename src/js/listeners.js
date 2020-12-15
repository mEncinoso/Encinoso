document.getElementById("encinoso-logo").addEventListener("click", function () {
  showMainContent("indexContent");
});

document.getElementById("btn-toExpo").addEventListener("click", function () {
  showMainContent("expo");
});

function showMainContent(content) {
  var children = document.getElementById("webContent").children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].id != content) {
      document.getElementById(children[i].id).style.display = "none";
    } else {
      document.getElementById(children[i].id).style.display = "block";
    }
  }
}

document.getElementById("initialContentLink")
  .addEventListener("click", function () {
    showContent("init_content");
  });

document.getElementById("locationLink").addEventListener("click", function () {
  showContent("location_content");
});

document.getElementById("contact_link").addEventListener("click", function () {
  showContent("contact_content");
});

function showContent(content) {
  var children = document.getElementById("content").children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].id != content) {
      document.getElementById(children[i].id).style.display = "none";
    } else {
      document.getElementById(children[i].id).style.display = "block";
    }
  }
}
