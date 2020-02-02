import "./style/libs/reboot.css";
import "./style/main.sass";

const skillsEl = document.querySelector(".skills");
const worksEl = document.querySelector(".works");
const contactEl = document.querySelector(".contact");
const aboutEl = document.querySelector(".about");

const headerScrollEl = document.querySelector(".header__scroll-arrow");
headerScrollEl.addEventListener("click", () => {
  const interval = setInterval(() => {
    const aboutCoords = aboutEl.getBoundingClientRect();
    if (aboutCoords.top < 60) {
      clearInterval(interval);
      return;
    }
    window.scrollTo(0, window.pageYOffset + 5);
  }, 0.1);
});

const menuEl = document.querySelector(".menu");
const menuAboutEl = menuEl.children[0];
const menuSkillsEl = menuEl.children[1];
const menuWorksEl = menuEl.children[2];
const menuContactEl = menuEl.children[3];

menuEl.addEventListener('click', (e) => {
  const clickedLogo = e.target.tagName === 'I' ? e.target.parentElement : e.target;
  let interval;

  switch (clickedLogo) {
    case menuAboutEl:
      const aboutCoords = aboutEl.getBoundingClientRect();
      if (aboutCoords.top > 0) {
        interval = setInterval(() => {
          const aboutCoords = aboutEl.getBoundingClientRect();
          if (aboutCoords.top < 60) {
            clearInterval(interval);
            return;
          }
          window.scrollTo(0, window.pageYOffset + 5);
        }, 0.1);
        return;
      }
      interval = setInterval(() => {
        const aboutCoords = aboutEl.getBoundingClientRect();
        if (aboutCoords.top < 60 && aboutCoords.top > 50) {
          clearInterval(interval);
          return;
        }
        window.scrollTo(0, window.pageYOffset - 10);
      }, 0.5);
      return;
  
    default:
      break;
  }
})

window.addEventListener("scroll", () => {
  if (contactEl.getBoundingClientRect().top - 300 <= 0) {
    if (menuContactEl.classList.contains("menu__icon_active")) {
      return;
    }
    [...menuEl.children].forEach(el => el.classList.remove("menu__icon_active"));
    menuContactEl.classList.add("menu__icon_active");
    return;
  }
  if (worksEl.getBoundingClientRect().top - 300 <= 0) {
    if (menuWorksEl.classList.contains("menu__icon_active")) {
      return;
    }
    [...menuEl.children].forEach(el => el.classList.remove("menu__icon_active"));
    menuWorksEl.classList.add("menu__icon_active");
    return;
  }
  if (skillsEl.getBoundingClientRect().top - 300 <= 0) {
    if (menuSkillsEl.classList.contains("menu__icon_active")) {
      return;
    }
    [...menuEl.children].forEach(el => el.classList.remove("menu__icon_active"));
    menuSkillsEl.classList.add("menu__icon_active");
    return;
  }
  if (aboutEl.getBoundingClientRect().top - 300 <= 0) {
    if (menuAboutEl.classList.contains("menu__icon_active")) {
      return;
    }
    [...menuEl.children].forEach(el => el.classList.remove("menu__icon_active"));
    menuAboutEl.classList.add("menu__icon_active");
    return;
  }
  [...menuEl.children].forEach(el => el.classList.remove("menu__icon_active"));
});
