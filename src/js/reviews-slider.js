// Слайдер в секции "Сервисы" start

var changeSection9rewievsHeaderRus = document.querySelector(".section-9__rewievs-header-rus");
var changeSection9rewievsHeaderEng = document.querySelector(".section-9__rewievs-header-eng");

var changeSection9rewievsHeaderTxtRus = document.querySelector(".section-9__rewievs-header-txt-rus");
var changeSection9rewievsHeaderTxtEng = document.querySelector(".section-9__rewievs-header-txt-eng");

var changesection9rewievsArticleRus = document.querySelector(".section-9__rewievs-article-rus");
var changesection9rewievsArticleEng = document.querySelector(".section-9__rewievs-article-eng");

var changeSection9rewievsHidden = document.querySelector(".section-9__rewievs-hidden");

/* Открывает и закрывает слайды в разделе отзывов,
а также меняет цвета текста и фонов на переключателях слайдов start */
changeSection9rewievsHeaderEng.addEventListener("click", function () {
  changeSection9rewievsHeaderEng.classList.remove("section-9__rewievs-bg-header-active");
  changeSection9rewievsHeaderEng.classList.add("section-9__rewievs-bg-header-not-active");

  changeSection9rewievsHeaderTxtRus.classList.remove("section-9__rewievs-header-txt-active");
  changeSection9rewievsHeaderTxtRus.classList.add("section-9__rewievs-header-color-not-active");

  changeSection9rewievsHeaderTxtEng.classList.remove("section-9__rewievs-header-color-not-active");
  changeSection9rewievsHeaderTxtEng.classList.add("section-9__rewievs-header-txt-active");

  changeSection9rewievsHeaderRus.classList.remove("section-9__rewievs-bg-header-active");
  changeSection9rewievsHeaderRus.classList.add("section-9__rewievs-bg-header-not-active");

  changeSection9rewievsHeaderTxtEng.classList.remove("section-9__rewievs-header-color-not-active");
  changeSection9rewievsHeaderTxtEng.classList.add("section-9__rewievs-header-txt-active");

  changeSection9rewievsHeaderTxtEng.classList.add("section-9__rewievs-bg-header-active");
  changeSection9rewievsHeaderTxtEng.classList.add("section-9__rewievs-header-txt-active-fix-eng");

  changesection9rewievsArticleRus.classList.add("section-9__rewievs-hidden");
  changesection9rewievsArticleEng.classList.remove("section-9__rewievs-hidden");
});

changeSection9rewievsHeaderRus.addEventListener("click", function () {
  changeSection9rewievsHeaderRus.classList.add("section-9__rewievs-bg-header-active");
  changeSection9rewievsHeaderRus.classList.remove("section-9__rewievs-bg-header-not-active");

  changeSection9rewievsHeaderTxtRus.classList.add("section-9__rewievs-header-txt-active");
  changeSection9rewievsHeaderTxtRus.classList.remove("section-9__rewievs-header-color-not-active");

  changeSection9rewievsHeaderTxtEng.classList.add("section-9__rewievs-header-color-not-active");
  changeSection9rewievsHeaderTxtEng.classList.remove("section-9__rewievs-header-txt-active");

  changeSection9rewievsHeaderTxtEng.classList.remove("section-9__rewievs-bg-header-active");
  changeSection9rewievsHeaderTxtEng.classList.remove("section-9__rewievs-header-txt-active-fix-eng");

  changesection9rewievsArticleRus.classList.remove("section-9__rewievs-hidden");
  changesection9rewievsArticleEng.classList.add("section-9__rewievs-hidden");

});
/* Открывает и закрывает слайды в разделе отзывов,
а также меняет цвета текста и фонов на переключателях слайдов end */

