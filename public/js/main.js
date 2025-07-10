import footer from "./components/footer.js";
import mainHeader from "./components/main-header.js";
import MegaMenu from "./components/mega-menu.js";
import partnerListMarquee from "./components/partner-list-marquee.js";
import Typewriter from "./components/typewriter.js";
import routes from "./data/routes.js";

const initialLoader = document.querySelector("#loader-initial");
const routerLoader = document.querySelector("#router-loader");

window.addEventListener("beforeunload", () => {
  routerLoader.style.display = "flex";
});

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    routerLoader.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  //routerLoader.style.display = "none";
  const hasSeenLoader = sessionStorage.getItem("seen-loader");

  if (!hasSeenLoader) {
    initialLoader.style.display = "flex";

    setTimeout(() => {
      sessionStorage.setItem("seen-loader", "true");
      initialLoader.style.display = "none";
    }, 5000);
  } else {
    initialLoader.style.display = "none";
  }

  mainHeader();
  footer();
  partnerListMarquee();
  new MegaMenu(document.querySelector("#mega-menu"), { items: routes });
  new Typewriter("#typewriter");
});
