const menuItens = document.querySelectorAll(".header a");
const btn = document.getElementById("btnTop");

console.log(menuItens);

menuItens.forEach((item) => {
  item.addEventListener("click", scrollSuave);
});

function scrollSuave(event) {
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
}

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

document.addEventListener("scroll",ocultar);

function ocultar() {
  if (window.scrollY > 10) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}

ocultar();
