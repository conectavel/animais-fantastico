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

function navFaq() {
  const faqDd = document.querySelectorAll(".js-faq dd")
  const faqDt = document.querySelectorAll(".js-faq dt")

  function faqdtClick(index) {
    faqDd[index].classList.toggle("ativo")
    faqDt[index].classList.toggle("ativo")
  }
  faqDt.forEach((item, index) => {
    item.addEventListener("click", () => {
      faqdtClick(index);
    })
  })
}

navFaq(); //isolando a função 

function scrollSuave() {
  const menuLight = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const hrefId = event.currentTarget.getAttribute('href');
    const section = document.querySelector(hrefId);
    const topo = section.offsetTop + -60;
    console.log(topo);
    window.scrollTo({
      top: topo,
      behavior: "smooth"
    });
  }

  menuLight.forEach((item) => {
    item.addEventListener("click", scrollSection)
  });
}
scrollSuave()//isolando a função 

function animacaoEntarda() {
  const sectionScroll = document.querySelectorAll(".js-scroll");
  const windowTamanho = window.innerHeight * 0.9;

  function animaScroll() {
    sectionScroll.forEach((item) => {
      const scrollTop = item.getBoundingClientRect().top;
      const visualizando = (scrollTop - windowTamanho) < 0;
      if (visualizando) {
        item.classList.add("ativo");
      } else {
        item.classList.remove("ativo");
      }
    });
  }
  function animaScroll()
  window.addEventListener("scroll", animaScroll)
}