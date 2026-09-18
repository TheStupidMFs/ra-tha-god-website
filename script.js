const gate = document.querySelector("#gate");
const site = document.querySelector("#site");

const enter = document.querySelector("#enterBtn");

const storyBtn =
  document.querySelector("#storyBtn");

const modal =
  document.querySelector("#storyModal");

const closeStory =
  document.querySelector("#closeStory");

const storyEnter =
  document.querySelector("#storyEnter");


/* ==========================
   LOADER
========================== */

window.addEventListener(
  "load",
  () => {

    setTimeout(() => {
      document.querySelector("#loader")
        .style.opacity = "0";
    }, 700);

    setTimeout(() => {
      document.querySelector("#loader")
        ?.remove();
    }, 1200);

  }
);


/* ==========================
   ENTER WORLD
========================== */

function enterWorld(target) {

  gate.style.transition =
    "opacity .8s, filter .8s, transform .8s";

  gate.style.filter =
    "blur(12px) saturate(1.8)";

  gate.style.transform =
    "scale(1.04)";

  gate.style.opacity = "0";


  site.classList.add("active");

  site.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.remove(
    "locked"
  );


  setTimeout(() => {

    gate.style.display = "none";

    if (target) {

      document
        .querySelector(target)
        ?.scrollIntoView();

    }

  }, 850);

}


enter.addEventListener(
  "click",
  () => enterWorld()
);


/* ==========================
   STORY MODAL
========================== */

storyBtn.addEventListener(
  "click",
  () => {

    modal.classList.add("open");

  }
);


closeStory.addEventListener(
  "click",
  () => {

    modal.classList.remove("open");

  }
);


storyEnter.addEventListener(
  "click",
  event => {

    event.preventDefault();

    modal.classList.remove("open");

    enterWorld("#story");

  }
);


document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      modal.classList.remove("open");

    }

  }
);


/* ==========================
   NEON MOUSE LIGHT
========================== */

const light =
  document.querySelector(
    ".cursor-light"
  );


window.addEventListener(
  "pointermove",
  event => {

    light.style.left =
      event.clientX + "px";

    light.style.top =
      event.clientY + "px";

  }
);


/* ==========================
   SCROLL REVEALS
========================== */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (entry.isIntersecting) {

            entry.target
              .classList.add("seen");

          }

        }
      );

    },

    {
      threshold: .12
    }

  );


document
  .querySelectorAll(
    ".billboard, .release-wrap, .story-grid, .screen"
  )
  .forEach(element => {

    element.style.opacity = ".25";

    element.style.transform =
      "translateY(35px)";

    element.style.transition =
      "opacity .8s, transform .8s";

    observer.observe(element);

  });


document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
      .seen {
        opacity: 1 !important;
        transform: none !important;
      }
    </style>
  `
);
