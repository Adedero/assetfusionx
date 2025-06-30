export default function mainHeader() {
  const header= document.getElementById("main-header");
  const wrapper = document.getElementById("main-header-wrapper");

  if (!header || !wrapper)  return;

  const targetScrollHeight = 150;

  window.addEventListener("scroll", onWindowScroll);

  function onWindowScroll() {
    if (window.scrollY >= targetScrollHeight) {
      header.classList.add("active");
      wrapper.classList.add("active");
    } else if (window.scrollY < targetScrollHeight) {
      header.classList.remove("active");
      wrapper.classList.remove("active");
    }
  }
}