// Expand Header Navgation Function
function expandNavgation() {
  let navgation = document.querySelector(".header .main-navgation");
  let toggleMenu = document.querySelector(".header .burger-menu");
  let icon = toggleMenu.querySelector(".icon");
  let closed = true;

  toggleMenu.addEventListener("click", () => {
    // Change Icon
    icon.classList.contains("fa-bars")
      ? (icon.className = "fa-regular fa-xmark icon")
      : (icon.className = "fa-regular fa-bars icon");
    // Open Or Close Navgation Menu
    let navgationHeight = navgation.scrollHeight;
    closed
      ? (navgation.style.height = `${navgationHeight}px`)
      : (navgation.style.height = "");
    closed = !closed;
  });
  // Close Navgation For Devices Greater Than 992px Width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      icon.className = "fa-regular fa-bars icon";
      navgation.style.height = "";
      closed = true;
    }
  });
}
expandNavgation();
