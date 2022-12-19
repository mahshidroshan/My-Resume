// load page from top
// links click and scroll not working
// responsive for the image

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//navbar background on scroll
const nav = document.querySelector(".navbar");

window.onscroll = () => {
  window.scrollY < 50
    ? nav.classList.add("active")
    : nav.classList.remove("active");
};

//text effect
var words = ["IT Engineer", "Web Designer", "UI/UX Designer"],
  part,
  i = 0,
  offset = 0,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordFlick = function () {
  setInterval(function (n) {
    if (forwards) {
      if (offset >= words[i].length) {
        skip_count++;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        if (i >= words.length) {
          i = 0;
        }
      }
    }
    part = words[i].substring(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part + "|");
  }, speed);
};

$(document).ready(function () {
  wordFlick();

  window.onscroll();
});

//active link
$(".nav-link").click(function () {
  $(".nav-link.active").removeClass("active");
  $(this).addClass("active");
});

//scroll to section handler
//scroll to section handler
$(window).scroll(function () {
  var href = $(this).scrollTop(); //scroll distance to top of page

  $(".nav-link").each(function (event) {
    if (event == 0 && href < 100) {
      $(".nav-link.active").removeClass("active");
      $(this).addClass("active");
    }

    if (event > 0 && href >= $($(this).attr("href")).offset().top - 1) {
      $(".nav-link.active").removeClass("active");
      $(this).addClass("active");
    }
  });
});

//Reset scroll top
window.onload = function () {
  window.location.href = "index.html#top";
};

//previous and next button
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//
let slide_Index = 1;
show_Slides(slide_Index);

function plus(m) {
  show_Slides((slide_Index += m));
}

function current_Slide(m) {
  show_Slides((slide_Index = m));
}

function show_Slides(m) {
  let l;
  let slidesS = document.getElementsByClassName("educate-slide");
  if (m > slidesS.length) {
    slide_Index = 1;
  }
  if (m < 1) {
    slide_Index = slidesS.length;
  }
  for (l = 0; l < slidesS.length; l++) {
    slidesS[l].style.display = "none";
  }
  slidesS[slide_Index - 1].style.display = "block";
}

//progress bar
$(".animated-progress span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    1000
  );
  $(this).text($(this).attr("data-progress") + "%");
});

//Gallery
$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show").removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({
            zIndex: zindex,
          })
          .addClass("show");
      }

      zindex++;
    } else {
      // no cards in view
      $("div.cards").addClass("showing");
      $(this)
        .css({
          zIndex: zindex,
        })
        .addClass("show");

      zindex++;
    }
  });
});

//load more
$(document).ready(function () {
  $("#loadMore").on("click", function (e) {
    e.preventDefault();

    if ($("div.card:hidden").length == 0) {
      $("div.card").slice(2, 9).hide();
      $("#loadMore").text("Show More");
    }

    $("div.card:hidden").slice(0, 2).slideDown();

    if ($("div.card:hidden").length == 0) {
      $("#loadMore").text("Show Less");
    }
  });
});

//dark mode
("use strict");

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");

  if (document.getElementById("light-version").innerHTML == "LIGHT VERSION") {
    document.getElementById("light-version").innerHTML = "DARK VERSION";
  } else {
    document.getElementById("light-version").innerHTML = "LIGHT VERSION";
  }
}

//preloader

const preloader = document.querySelector(".preloader");

const fadeOutEffect = setInterval(() => {
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    preloader.style.visibility = "hidden";
    clearInterval(fadeOutEffect);
  }
}, 700);
