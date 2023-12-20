document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  window.location.href = "../403/";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
    window.location.href = "../403/";
  }
});
