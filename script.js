function navTab() {
  /* Abaixo temo um códido de navegação por tab, ou seja, com evento click, adiciona um class no css "ativo" de acordo com evento click, relacionando os indices da NodeList.*/
  const navegaTabImg = document.querySelectorAll(".js-tabmenu li");
  //console.log(navegaTabImg);
  const navegaTabTxt = document.querySelectorAll(".js-tabcontent section");
  //console.log(navegaTabTxt[1]);

  function activeTab(index) {
    navegaTabTxt[index].classList.add("ativo");
    navegaTabTxt.forEach((section) => {
      section.classList.remove("ativo");
    });
    navegaTabTxt[index].classList.add("ativo");
  };
  navegaTabImg.forEach((item, index) => {
    item.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
navTab() //isolando a função


const faqDd = document.querySelectorAll(".js-faq dd")
const faqDt = document.querySelectorAll(".js-faq dt")

function faqdtClick(index) {
  faqDd[index].classList.toggle("ativo")
  //faqDd.forEach((item) => {
  //item.classList.toggle("ativo");
  // });

}
faqDt.forEach((item, index) => {
  item.addEventListener("click", () => {
    faqdtClick(index);
  })
})







const imgTop = document.querySelector('img');
console.log(imgTop.offsetTop)

const imgTopwidth = document.querySelectorAll('img');
let soma = 0;
imgTopwidth.forEach(function (item, index, array) {
  soma += item.offsetWidth
});
console.log(soma);

const links = document.querySelectorAll('a');
links.forEach(function (item) {
  const linkW = item.offsetWidth;
  const linkH = item.offsetHeight;
  if (linkW >= 48 && linkH >= 48) {
    console.log(item, "Possuí acessibilidade")
  } else {
    console.log(item, "Não possui acessibilidade")
  }
})


const browserSmall = window.matchMedia("(max-width: 720px)").matches;
console.log(browserSmall)
if (browserSmall) {
  const menu = document.querySelector(".menu")
  menu.classList.add("mobile")
}
