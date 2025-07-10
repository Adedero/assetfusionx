import footer from "./components/footer.js";
import mainHeader from "./components/main-header.js";
import MegaMenu from "./components/mega-menu.js";
import partnerListMarquee from "./components/partner-list-marquee.js";
import Typewriter from "./components/typewriter.js";
import routes from "./data/routes.js";


document.addEventListener("DOMContentLoaded", () => {
  mainHeader();
  footer();
  partnerListMarquee();
  new MegaMenu(document.querySelector("#mega-menu"), { items: routes });
  new Typewriter("#typewriter");
});
