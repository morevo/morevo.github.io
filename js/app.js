/* Click filter - portfolio */
$(() => {
  // Можно напписать так или $(() => { }) или так $( function() { });-$(document).ready(())

  let filter = $("[data-filter]"); //Сохр. элементы с data-filter, по которым будем отслеживать клик

  filter.on("click", function (event) {
    // По клику на элементы с атрибутом ( [data-filter] ) мы будем что-то делать
    event.preventDefault(); // Убираем стандартное поведенее ссылки, при клике перебрось на верх сайта

    let cat = $(this).data("filter"); // При клике на data-filter(this) атрибут, будем получать значение после filter=""

    if (cat == "all") {
      $("[data-category]").removeClass("hide");
      $("[data-category]").removeClass("show");
      $("[data-category]").fadeOut("slow", "swing");

      setTimeout(() => $("[data-category]").fadeOut("slow", "swing"), 500);
      setTimeout(() => $("[data-category]").fadeIn("slow", "swing"), 600);
    } else {
      $("[data-category]").each(function () {
        // Проходимся по всем data-category

        let workCat = $(this).data("category"); // Сохраняем все значения data-category(this) в переменную

        if (workCat != cat) {
          // Если значение из переменной workCat != значению cat
          $(this).addClass("hide"); // Тогда мы добавляем им класс "hide" который будет скрывать дургое
          $(".hide").fadeOut("slow", "swing");
          $(this).removeClass("show"); // Тогда мы добавляем им класс "hide" который будет скрывать дургое
          // Тогда мы добавляем им класс "hide" который будет скрывать дургое
        } else {
          $(this).removeClass("hide"); // Иначе, если workCat == cat, то мы удаляем у них класс hide
          $(this).addClass("show"); // Иначе, если workCat == cat, то мы удаляем у них класс hide
          $(".show").fadeOut("slow", "swing");

          setTimeout(() => $(".show").fadeIn("slow", "swing"), 600);
        }
      });
    }
  });

  /* Show modals - modal */
  let showModal = $("[data-show]");

  showModal.on("click", function (event) {
    event.preventDefault();
    let show = $(this).data("show");

    $("[data-modal]").each(function () {
      let modal = $(this).data("modal");
      if (show == modal) {
        $(this).fadeIn("slow", "swing");
        $("body").addClass("scroll__off");
      } else {
        let close = $("[data-exit]");

        close.on("click", function () {
          $("body").removeClass("scroll__off");
          $(".modal").fadeOut("slow", "swing");
          $(this).fadeOut("slow", "swing");
          setTimeout(() => $(this).fadeIn("slow", "swing"));
        });
      }
    });
    $("#worksSlider").slick("setPosition"); // After open modal window, slider set in center default position, don't outside
  });

  /* Click outside and hide modal - modal__dialog */
  $(document).mouseup(function (e) {
    let clickOut = $(".modal__dialog");

    if (!clickOut.is(e.target) && clickOut.has(e.target).length === 0) {
      // Если .modal__dialog не будет таргетом
      $(".modal").fadeOut("slow", "swing"); // И не явл. потомками .modal__dialog
      $("body").removeClass("scroll__off");
    }
  });

  /* Click and scroll from (header,footer) to "about me". */

  let scrollFromAbout = $(".start__about__scroll");
  let scrollFromNews = $(".start__news__scroll");
  let scrollFromFooter = $(".start__footer__scroll");
  let scrollFromUp = $(".start__up__scroll");
  let scrollFromWorks = $(".start__works__scroll");
  let toAbout = $(".final__about__scroll");
  let toNews = $(".final__news__scroll");
  let toHeader = $(".final__up__scroll");
  let toWorks = $(".final__works__scroll");

  scrollFromAbout.on("click", function (e) {
    e.preventDefault();

    let aboutDistance = toAbout.offset().top;
    $("body, html").animate(
      {
        scrollTop: aboutDistance - 160,
      },
      1500
    );
  });

  scrollFromNews.on("click", function (e) {
    e.preventDefault();

    let newsDistance = toNews.offset().top;
    $("body, html").animate(
      {
        scrollTop: newsDistance,
      },
      2000
    );
  });

  scrollFromFooter.on("click", function (e) {
    e.preventDefault();

    let distance = toAbout.offset().top;

    $("body, html").animate(
      {
        scrollTop: distance - 160,
      },
      1500
    );
  });

  scrollFromUp.on("click", function (e) {
    e.preventDefault();

    let distance = toHeader.offset().top;
    $("body, html").animate(
      {
        scrollTop: distance,
      },
      1500
    );
  });

  scrollFromWorks.on("click", function (e) {
    e.preventDefault();

    let distance = toWorks.offset().top;
    $("body, html").animate(
      {
        scrollTop: distance,
      },
      1500
    );
  });

  /* Create class up and fixed box arrow to up */
  $(window).scroll(function () {
    let up = $("[data-up]").offset().top; // Scroll count

    if (up > 1200) {
      $("[data-up]").css("opacity", "1");
      $("[data-up] a").css("cursor", "pointer");
    } else {
      $("[data-up]").css("opacity", "0");
      $("[data-up] a").css("cursor", "");
    }
  });

  /* Burger */
  let burgerNav = $(".nav__burger"); // Element on click, and show menu nav.
  let burgerBack = $(".nav__burger__back"); // Element on click, and hive menu nav back.
  let burgerItem = $(".burger__item");
  let burger = $(".burger");
  let timer = $("[data-timer]");

  burgerNav.on("click", function () {
    $(burgerBack).css("z-index", "4");
    $(burgerNav).css("z-index", "3");

    $(burger).fadeOut("slow", "swing");
    $(burgerBack).fadeIn("slow", "swing");

    $(burgerItem).addClass("close__turn");
    $(burgerItem).removeClass("close__turn-back");

    $(burger).addClass("burger__turn");
    $(burger).removeClass("burger__turn-back");

    let timerItem = $(timer).each(function () {
      let item = $(this).data("timer");
      let rotate = "nav__rotate";
      let timerOne = "[data-timer='item-one']";
      let timerTwo = "[data-timer='item-two']";
      let timerThree = "[data-timer='item-three']";
      let timerFour = "[data-timer='item-four']";
      setTimeout(() => {
        $(timerOne).addClass(rotate);
      }, 100);
      setTimeout(() => {
        $(timerTwo).addClass(rotate);
      }, 150);
      setTimeout(() => {
        $(timerThree).addClass(rotate);
      }, 200);
      setTimeout(() => {
        $(timerFour).addClass(rotate);
      }, 250);

      burgerBack.on("click", function () {
        $(burgerNav).css("z-index", "4"); // Switch z-index's. Show and hide nav menu.
        $(burgerBack).css("z-index", "3");

        $(burger).fadeIn("slow", "swing");
        $(burgerBack).fadeOut("slow", "swing");

        $(burgerItem).removeClass("close__turn");
        $(burgerItem).addClass("close__turn-back");

        $(burger).addClass("burger__turn-back");
        $(burger).removeClass("burger__turn");

        setTimeout(() => {
          $(timerOne).removeClass(rotate);
        }, 100);
        setTimeout(() => {
          $(timerTwo).removeClass(rotate);
        }, 150);
        setTimeout(() => {
          $(timerThree).removeClass(rotate);
        }, 200);
        setTimeout(() => {
          $(timerFour).removeClass(rotate);
        }, 250);
      });
    });
  });

  /* Show more in about content */
  let width = window.matchMedia("(max-width: 605px)");
  let aboutLink = $(".about__text-link");
  let aboutLinkFade = $(".about__text-fade");
  let AboutTextOne = $(".about__text-one");
  let AboutTextTwo = $(".about__text-two");

  aboutLink.on("click", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(aboutLinkFade).css("display", "block");
    $(AboutTextOne).fadeIn("slow", "swing");
    $(AboutTextTwo).fadeIn("slow", "swing");
  });
  aboutLinkFade.on("click", function (e) {
    e.preventDefault();
    $(this).css("display", "none");
    $(aboutLink).css("display", "block");
    $(AboutTextOne).fadeOut("slow", "swing");
    $(AboutTextTwo).fadeOut("slow", "swing");
  });
});

/* Scroll event - about */
$(window).scroll(function () {
  let scrollDown = $("[data-scrollDown]").offset().top;
  if (
    $(this).scrollTop() > scrollDown - 290 &&
    $(this).scrollTop() < scrollDown - 100
  ) {
    $(".about__bigtitle").addClass("hover__on");

    setTimeout(() => $(".about__bigtitle").addClass("hover__off"), 600);
  } else {
    $(".about__bigtitle").removeClass("hover__on");
    $(".about__bigtitle").removeClass("hover__off");
  }
});

/* Slick Slider: http://kenwheeler.github.io/slick/ */

$("#worksSlider").slick({
  infinite: true, // Infinity slide images
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true,
});

let slick = $("[data-slick]");

slick.on("click", function (e) {
  e.preventDefault();
  let slickSwitch = $(this).data("slick");

  switch (slickSwitch) {
    case "previous":
      $("#worksSlider").slick("slickPrev");
      break;

    case "next":
      $("#worksSlider").slick("slickNext");
      break;
  }
});

/* Проходимся по item'am, если item == "work-one", делаем on.click на кнопки внутри модального окна, и делаем слайд slickPrev or slickNext */

/* Make different modals (work) for block (works) */
function ProjectConstructor(name, cat, year, customer, desc) {
  // Processing...
  this.name = name;
  this.cat = cat;
  this.year = year;
  this.customer = customer;
  this.desc = desc;
}

let infoModal = new ProjectConstructor(
  "Hello",
  "asda",
  "2021",
  "Agency good",
  "Nice project"
);
let infoModalTwo = new ProjectConstructor(
  "SSSS",
  "SSSSSasSSSSSda",
  "2021",
  "asgasasd",
  "cxcbx"
);
let infoModalThree = new ProjectConstructor(
  "TTTT",
  "SSSSSasSSSSSda",
  "2021",
  "dfgsd",
  "awrwet"
);
let infoModalFour = new ProjectConstructor(
  "YYYY",
  "SSSSSasSSSSSda",
  "2021",
  "dsfgsdf",
  "yioty"
);
let infoModalFive = new ProjectConstructor(
  "HHHH",
  "SSSSSasSSSSSda",
  "2021",
  "sdfgsdfg",
  "23412"
);
let infoModalSix = new ProjectConstructor(
  "ZZZZ",
  "SSSSSasSSSSSda",
  "2021",
  "dsfgsdf",
  "dsfj4s"
);

let target = $("[data-target]");

target.on("click", function (e) {
  e.preventDefault();

  let workTarget = $(this).data("target");

  switch (workTarget) {
    case "work-one":
      $(".modal-work__title").text(infoModal.name);
      $(".modal-work__cat").text(infoModal.cat);
      $(".modal-work__date").text(infoModal.date);
      $(".modal-work__name").text(infoModal.customer);
      $(".modal-work__text").text(infoModal.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;

    case "work-two":
      $(".modal-work__title").text(infoModalTwo.name);
      $(".modal-work__text").text(infoModalTwo.cat);
      $(".modal-work__date").text(infoModalTwo.date);
      $(".modal-work__name").text(infoModalTwo.customer);
      $(".modal-work__cat").text(infoModalTwo.desc);
      $(".modal-work__photo-one").attr("src", "../images/facebook.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/instagram.svg");
      $(".modal-work__photo-three").attr("src", "../images/mail.svg");
      break;

    case "work-three":
      $(".modal-work__title").text(infoModalThree.name);
      $(".modal-work__text").text(infoModalThree.cat);
      $(".modal-work__date").text(infoModalThree.date);
      $(".modal-work__name").text(infoModalThree.customer);
      $(".modal-work__cat").text(infoModalThree.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;

    case "work-four":
      $(".modal-work__title").text(infoModalFour.name);
      $(".modal-work__text").text(infoModalFour.cat);
      $(".modal-work__date").text(infoModalFour.date);
      $(".modal-work__name").text(infoModalFour.customer);
      $(".modal-work__cat").text(infoModalFour.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;

    case "work-five":
      $(".modal-work__title").text(infoModalFive.name);
      $(".modal-work__text").text(infoModalFive.cat);
      $(".modal-work__date").text(infoModalFive.date);
      $(".modal-work__name").text(infoModalFive.customer);
      $(".modal-work__cat").text(infoModalFive.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;

    case "work-six":
      $(".modal-work__title").text(infoModalSix.name);
      $(".modal-work__text").text(infoModalSix.cat);
      $(".modal-work__date").text(infoModalSix.date);
      $(".modal-work__name").text(infoModalSix.customer);
      $(".modal-work__cat").text(infoModalSix.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;
  }
});
