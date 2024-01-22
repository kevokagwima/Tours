const burger = document.querySelector(".burger");
const side_nav = document.querySelector(".side-nav");
const close = document.getElementById("close");

burger.addEventListener("click", () => {
  side_nav.classList.add("show-side-nav");
});

close.addEventListener("click", () => {
  side_nav.classList.remove("show-side-nav");
});

window.addEventListener("scroll", () => {
  side_nav.classList.remove("show-side-nav");
});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("testimonial");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "grid";
}

var modal = document.getElementById("myModal");
var images = document.querySelectorAll("#gallery-img");
var modalImg = document.getElementById("img01");

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
