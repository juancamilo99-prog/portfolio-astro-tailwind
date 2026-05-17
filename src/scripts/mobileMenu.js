import { gsap } from "gsap";

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("hidden");
  if (isOpen) {
    mobileMenu.classList.remove("hidden");

    gsap.set(mobileMenu, { 
        opacity: 0, y: -20 
    });
    gsap.to(
      mobileMenu,
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        }
    );
  } else {
    gsap.to(mobileMenu, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.in",
      onComplete: function () {
        mobileMenu.classList.add("hidden");
      },
    });
  }

  gsap.to(menuButton, {
    rotation: isOpen ? 360 : 0,
    duration: 0.5,
    ease: "power2.inOut",
  });
});
