document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  window.location.href = "proibido.html";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
    window.location.href = "proibido.html";
  }
});
