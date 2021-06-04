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

  /* Show more work items */
  let worksWidth1199px = window.matchMedia("(max-width: 1199px)"); // Less than 1199px
  let worksWidth797px = window.matchMedia("(max-width: 797px)"); // Less than 797px // Максимальная и от нее вниз (min-width) - минимальная и от нее вверх.
  let worksMinWidth1199px = window.matchMedia("(min-width: 1199px"); // More than 1199px //If my width will be more than 1199px,i make my button arrow(learn more workd)active and apadt.
  let buttonWorksFirstShow = $(".work__button-first-show");
  let buttonWorksSecondHide = $(".work__button-second-hide");
  let buttonNewsFirstShow = $(".news__button-first-show");
  let buttonNewsSecondHide = $(".news__button-second-hide");
  let buttonCategory = $("[data-category]");
  let buttonTarget = $("[data-target]");
  let buttonTargetWorkThree = $("[data-target='work-three']");
  let buttonTargetWorkFour = $("[data-target='work-four']");
  let buttonTargetWorkFive = $("[data-target='work-five']");
  let buttonTargetWorkSix = $("[data-target='work-six']");

  buttonWorksFirstShow.on("click", function (e) {
    // When will be appends more works, i make activate this moment. When max-width be more than 1199px... Processing.. Done
    e.preventDefault();
  });

  buttonNewsFirstShow.on("click", function (e) {
    // When will be appends more works, i make activate this moment. When max-width be more than 1199px... Processing.. Done
    e.preventDefault();
  });

  filter.on("click", function () {
    let cat = $(this).data("filter");

    $("[data-target]").each(function () {
      let target = $(this).data("target");
    });
    if (cat == "all") {
      $(buttonWorksSecondHide).css("display", "flex");
      $(buttonWorksFirstShow).css("display", "none");
    }
  });

  if (worksMinWidth1199px.matches) {
    buttonWorksFirstShow.on("click", function (e) {
      e.preventDefault();
      filter.on("click", function () {
        $(buttonWorksSecondHide).css("display", "none");
        $(buttonWorksFirstShow).css("display", "flex");
        let cat = $(this).data("filter");

        switch (cat) {
          case "all":
            $(buttonWorksSecondHide).css("display", "flex");
            $(buttonWorksFirstShow).css("display", "none");
        }
      });
      $(buttonCategory).fadeIn("slow", "swing");
      $(".hide").toggleClass("hide show");
      $(buttonWorksFirstShow).css("display", "none");
      $(buttonWorksSecondHide).css("display", "flex");
    });

    buttonWorksSecondHide.on("click", function (e) {
      e.preventDefault();

      $(buttonWorksSecondHide).css("display", "none");
      $(buttonWorksFirstShow).css("display", "flex");

      $("[data-target='work-three']")
        .parents("[data-category='interaction']")
        .fadeOut("slow", "swing");
      $("[data-target='work-four']")
        .parents("[data-category='website']")
        .fadeOut("slow", "swing");
      $(buttonTargetWorkFive)
        .parents("[data-category='app']")
        .fadeOut("slow", "swing");
      $(buttonTargetWorkSix)
        .parents("[data-category='interaction']")
        .fadeOut("slow", "swing");
    });

    buttonNewsFirstShow.on("click", function (e) {
      e.preventDefault();

      $(buttonNewsSecondHide).css("display", "block");
      $(buttonNewsFirstShow).css("display", "none");
    });

    buttonNewsSecondHide.on("click", function (e) {
      e.preventDefault();
      $(buttonNewsSecondHide).css("display", "none");
      $(buttonNewsFirstShow).css("display", "block");
    });
  }

  if (worksWidth1199px.matches) {
    // If max-width: 1199px will be true
    buttonWorksFirstShow.on("click", function (e) {
      e.preventDefault();

      filter.on("click", function () {
        // After click on arrow hide, activate event click on filter items
        $(buttonWorksSecondHide).css("display", "none");
        $(buttonWorksFirstShow).css("display", "flex");
        let cat = $(this).data("filter");

        switch (cat) {
          case "all":
            $(buttonWorksSecondHide).css("display", "flex");
            $(buttonWorksFirstShow).css("display", "none");

            $(buttonTargetWorkFive).fadeIn("slow", "swing");
            $(buttonTargetWorkSix).fadeIn("slow", "swing");
            break;

          case "app":
            $(buttonTargetWorkFive).fadeIn("slow", "swing");
            break;

          case "interaction":
            $(buttonTargetWorkSix).fadeIn("slow", "swing");
            break;
        }
      });

      $(buttonWorksFirstShow).css("display", "none");
      $(buttonWorksSecondHide).css("display", "flex");

      $(buttonCategory).fadeIn("slow", "swing");
      $(buttonTargetWorkFive).fadeTo(400, 1, "linear");
      $(buttonTargetWorkSix).fadeTo(400, 1, "linear");

      if (worksWidth797px.matches) {
        $("[data-target='work-four']").fadeTo(400, 1, "linear");
      }

      $(".hide").toggleClass("hide show"); // For show blocks after click on filter menu, and click on button show more
    });

    buttonWorksSecondHide.on("click", function (e) {
      // If max-width: 797px will be true
      e.preventDefault();

      $(buttonWorksSecondHide).css("display", "none");
      $(buttonWorksFirstShow).css("display", "flex");

      $(buttonTargetWorkFive).fadeOut("slow", "swing");
      $(buttonTargetWorkSix).fadeOut("slow", "swing");

      if (worksWidth797px.matches) {
        $("[data-target='work-four']")
          .parents("[data-category='website']")
          .fadeOut("slow", "swing");
        $(buttonTargetWorkFive)
          .parents("[data-category='app']")
          .fadeOut("slow", "swing");
        $(buttonTargetWorkSix)
          .parents("[data-category='interaction']")
          .fadeOut("slow", "swing");
      }
    });

    buttonNewsFirstShow.on("click", function (e) {
      e.preventDefault();
      $(".news__button-second-hide")
        .parents(".news__button__arrow")
        .css("margin", "0");
      $(buttonNewsSecondHide).css("display", "block");
      $(buttonNewsFirstShow).css("display", "none");

      $("[data-news='news-three']").fadeIn("slow", "swing");
    });

    buttonNewsSecondHide.on("click", function (e) {
      e.preventDefault();
      $(buttonNewsSecondHide).css("display", "none");
      $(buttonNewsFirstShow).css("display", "block");

      $("[data-news='news-three']").fadeOut("slow", "swing");
    });
  }

  /* For modal, copy contacts on click.. Processing... */
  // let contactCopy = $(".modal__contact__hover");

  // $(contactCopy).on("click", function(el) {
  //   let copyNumber = $(".contact__text-number").val(".contact__text-number").text();
  //   let copyEmail = $(".contact__text-email").val(".contact__text-email").text();

  //   document.execCommand("copy");

  // });

  /* For adaptation modal work */
  let maxWidth1200px = window.matchMedia("(max-width: 1200px)");
  let maxWidth1040px = window.matchMedia("(max-width: 1040px)");
  let maxWidth750px = window.matchMedia("(max-width: 750px)");
  let modalWork = $(".modal-work").parents(".modal");
  if (maxWidth1200px.matches) {
    $(modalWork).css("padding", "0 1rem");
  }
  if (maxWidth1040px.matches) {
    $("[data-slick='previous']").css("width", "2.3rem").css("height", "2.4rem");
    $("[data-slick='next']").css("width", "2.3rem").css("height", "2.4rem");

    $("[data-slick='previous']")
      .find(".work__item")
      .css("width", "1.6rem")
      .css("height", "1.6rem"); // find - for searching childs elements
    $("[data-slick='next']")
      .find(".work__item")
      .css("width", "1.6rem")
      .css("height", "1.6rem");
    $(".modal__dialog")
      .find(".modal__close-img")
      .css("width", "36px")
      .css("height", "36px");
  }
  if (maxWidth750px.matches) {
    //$(".modal-work").parents(".modal").css("padding", "5rem 1rem 5rem 1rem")
    $(".modal-work").parents(".modal__dialog").css("overflow", "hidden");
  }

  /* form__button prevenrDefault() */
  // $(".form__button").on("click", function(e) {   // Feedback Form. Processing.
  //   e.preventDefault();
  // });
  /* Work with form, reset after sent message to email */
  $(".form").submit(function() {  // After click on submit
    var form = this;
    $.ajax({
      type: "GET",
      url: "../php/feedback.php",
      data: $(".form").serialize()  // serialize for read datas from form - (input, textarea...)
    }).done(function() {
        form.reset();  // Delete datas after sent message
    });
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
  // This moment need optimization... Click on news, show 10 slides, click on works, show 3 images... Processing
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
  /* По клику на item work я буду добавлять элементы data-target в modal-work, и проверять, какой скролить. */
  // Processing...
  this.name = name;
  this.desc = desc;
  this.year = year;
  this.customer = customer;
  this.cat = cat;
}

let infoModal = new ProjectConstructor(
  "Landing page",
  "Website",
  "2021",
  "Game news",
  "So, imagine that you need some page, that will be storaged information about yours project. This landing page can will be employ for games news, game app dev. and many another themes which relations with many modern tehnologies"
);
let infoModalTwo = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);
let infoModalThree = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);
let infoModalFour = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);
let infoModalFive = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);
let infoModalSix = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);

let infoModalNewsSeven = new ProjectConstructor(
  "REACT.JS",
  "This framework works with interface faster than others. Thanks to this, programmers can save a lot of time and become more efficient. Compared to Angular, React's productivity has grown steadily, becoming a tool for creating serious and complex software.",
  "2021",
  "The most important functions",
  "REACT.JS"
);  

let infoModalNewsEight = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);

let infoModalNewsNine = new ProjectConstructor(
  "Coming soon",
  "Empty",
  "Empty",
  "Empty",
  "Empty"
);

let target = $("[data-target]");
target.on("click", function (e) {
  e.preventDefault();
  let workTarget = $(this).data("target");
  switch (workTarget) {
    case "work-one":
      $(".modal-work__title").text(infoModal.name);
      $(".modal-work__cat").text(infoModal.cat);
      $(".modal-work__date").text(infoModal.year);
      $(".modal-work__name").text(infoModal.customer);
      $(".modal-work__text").text(infoModal.desc);
      $(".modal-work__photo-one").attr("src", "../images/GameNews1.png"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/GameNews2.png");
      $(".modal-work__photo-three").attr("src", "../images/GameNews3.png");
      break;

    case "work-two":
      $(".modal-work__title").text(infoModalTwo.name);
      $(".modal-work__text").text(infoModalTwo.cat);
      $(".modal-work__date").text(infoModalTwo.year);
      $(".modal-work__name").text(infoModalTwo.customer);
      $(".modal-work__cat").text(infoModalTwo.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-three":
      $(".modal-work__title").text(infoModalThree.name);
      $(".modal-work__text").text(infoModalThree.cat);
      $(".modal-work__date").text(infoModalThree.year);
      $(".modal-work__name").text(infoModalThree.customer);
      $(".modal-work__cat").text(infoModalThree.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-four":
      $(".modal-work__title").text(infoModalFour.name);
      $(".modal-work__text").text(infoModalFour.cat);
      $(".modal-work__date").text(infoModalFour.year);
      $(".modal-work__name").text(infoModalFour.customer);
      $(".modal-work__cat").text(infoModalFour.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-five":
      $(".modal-work__title").text(infoModalFive.name);
      $(".modal-work__text").text(infoModalFive.cat);
      $(".modal-work__date").text(infoModalFive.year);
      $(".modal-work__name").text(infoModalFive.customer);
      $(".modal-work__cat").text(infoModalFive.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-six":
      $(".modal-work__title").text(infoModalSix.name);
      $(".modal-work__text").text(infoModalSix.cat);
      $(".modal-work__date").text(infoModalSix.year);
      $(".modal-work__name").text(infoModalSix.customer);
      $(".modal-work__cat").text(infoModalSix.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-seven":
      $(".modal-work__title").text(infoModalNewsSeven.name);
      $(".modal-work__text").text(infoModalNewsSeven.cat);
      $(".modal-work__date").text(infoModalNewsSeven.year);
      $(".modal-work__name").text(infoModalNewsSeven.customer);
      $(".modal-work__cat").text(infoModalNewsSeven.desc);
      $(".modal-work__photo-one").attr("src", "../images/reactOne.jpg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/reactTwo.jpg");
      $(".modal-work__photo-three").attr("src", "../images/reactThree.jpg");
      break;

    case "work-eight":
      $(".modal-work__title").text(infoModalNewsEight.name);
      $(".modal-work__text").text(infoModalNewsEight.cat);
      $(".modal-work__date").text(infoModalNewsEight.year);
      $(".modal-work__name").text(infoModalNewsEight.customer);
      $(".modal-work__cat").text(infoModalNewsEight.desc);
      $(".modal-work__photo-one").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      $(".modal-work__photo-three").attr("src", "../images/brick-wall.svg").css("background", "#2b2a2c");
      break;

    case "work-nine":
      $(".modal-work__title").text(infoModalNewsNine.name);
      $(".modal-work__text").text(infoModalNewsNine.cat);
      $(".modal-work__date").text(infoModalNewsNine.year);
      $(".modal-work__name").text(infoModalNewsNine.customer);
      $(".modal-work__cat").text(infoModalNewsNine.desc);
      $(".modal-work__photo-one").attr("src", "../images/linkedin.svg"); // Get src par. and change after click at work item
      $(".modal-work__photo-two").attr("src", "../images/phone-call.svg");
      $(".modal-work__photo-three").attr("src", "../images/twitter.svg");
      break;
  }
});
