"use strict";

/* ----------- header info ----------- */

const info = document.querySelector(".js_info");

info.addEventListener("mouseenter", () => {
  // console.log("a");
  info.classList.add("is-active");
});
info.addEventListener("mouseleave", () => {
  // console.log("b");
  info.classList.remove("is-active");
});

/* ----------- swiper ----------- */

const swiper = new Swiper(".swiper", {
  loop: true,

  autoplay: {
    delay: 0, // 途切れなくループ
    disableOnInteraction: false,
  },

  speed: 6000,
  allowTouchMove: false,

  slidesPerView: "auto", // 一度に表示する枚数
  spaceBetween: 10, // px

  breakpoints: {
    1080: {
      spaceBetween: 24, // px
    },
  },
});

/* ----------- accordion ----------- */

const faq = document.querySelectorAll(".js_faq");

faq.forEach((q) => {
  // console.log(q);
  q.addEventListener("click", function () {
    // console.log(q);
    q.classList.toggle("is-active");
    q.nextElementSibling.classList.toggle("is-open");
  });
});

/* ----------- page top ----------- */

const pageTop = document.querySelector(".m_page-top");

pageTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// スクロールされたら表示
window.addEventListener("scroll", scroll_event);

function scroll_event() {
  if (window.pageYOffset > 300) {
    pageTop.classList.add("is-active");
  } else {
    pageTop.classList.remove("is-active");
  }
}

/* ----------- modal ----------- */

const modal = document.querySelector(".js_modal");
const modalOpen = document.querySelector(".js_modalOpen");

// モーダルを開く
modalOpen.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("is-open");
  document.body.classList.add("no-scroll");
});

// モーダルの外側をクリックでモーダルが閉じる
modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modal-inner")) {
    modal.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});

/* ----------- hamburger menu ----------- */

const ham = document.querySelector(".js_hamburger");
const body = document.querySelector(".js_body");
const navLinks = document.querySelectorAll(".js_nav_link");
const breakpoint = 1079;
let isInvisible;

ham.addEventListener("click", () => {
  ham.classList.toggle("is-active");
  body.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");
});

$(".js_hamburger").on("click", function () {
  // console.log(".js_hamburger");
  $(".js_nav").slideToggle();
  // console.log(".js_nav");
});

function removeHamburgerClass() {
  // console.log(ham);
  isInvisible = true;
  $(".js_nav").slideUp();
  ham.classList.remove("is-active");
  document.body.classList.remove("no-scroll");
}

// pc
function pageScrollPC() {
  // console.log(".js_nav");
  let isInvisible = true;
  if (isInvisible) {
    $(".js_nav").css("display", "block");
  }

  navLinks.forEach((link) => {
    // console.log("a");
    link.addEventListener("click", (e) => {

      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      let targetOffsetTop =
        window.pageYOffset + targetElement.getBoundingClientRect().top;

      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    });
  });
}

// sp
function pageScrollSP() {
  // console.log(".js_nav");
  let isInvisible = true;
  if (isInvisible) {
    $(".js_nav").css("display", "none");

    navLinks.forEach((link) => {
      // console.log("a");
      link.addEventListener("click", (e) => {

        if (breakpoint > window.innerWidth) {
          removeHamburgerClass();
        }

        // const targetId = link.hash;
        const targetClass = link.hash;
        // const targetElement = document.querySelector(targetId);
        const targetElement = document.querySelector(targetClass);
        let targetOffsetTop =
          window.pageYOffset + targetElement.getBoundingClientRect().top;

        window.scrollTo({
          top: targetOffsetTop,
          behavior: "smooth",
        });
      });
    });
  }
}

// ロード時
window.addEventListener("load", () => {
  if (breakpoint < window.innerWidth) {
    pageScrollPC();
  } else {
    pageScrollSP();
  }
});

// リサイズ時
window.addEventListener("resize", () => {
  if (breakpoint < window.innerWidth) {
    pageScrollPC();
  } else {
    pageScrollSP();
  }
});

