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