import { gsap } from "gsap";

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const header_shadow = document.getElementById("header-navegation");

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("hidden");
  header_shadow.classList.toggle("shadow-md", !isOpen);
  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    header_shadow.classList.remove("shadow-md");

    gsap.set(mobileMenu, { 
        opacity: 0, y: -20 
    });
    gsap.to(
      mobileMenu,
        {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
        }
    );
  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      onComplete: function () {
        mobileMenu.classList.add("hidden");
        header_shadow.classList.add("shadow-md");
      },
    });
  }

  gsap.to(menuButton, {
    rotation: isOpen ? 360 : 0,
    duration: 0.4,
    ease: "power2.inOut",
  });
});
