window.addEventListener("scroll", function() {
  var header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("solid");
    header.classList.remove("transparent");
  } else {
    header.classList.remove("solid");
    header.classList.add("transparent");
  }
});