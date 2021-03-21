import "tailwindcss/tailwind.css";
import "./style.css";

const mediaQuery = window.matchMedia('(min-width: 1024px)').matches
const mediaMobileQuery = window.matchMedia('(max-width: 1024px)').matches
const mainPage = document.getElementById("main-page");
const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const nameModalInput = document.getElementById('name-modal');
const phoneModalInput = document.getElementById('phone-modal');
const header = document.getElementById("header");

// Form validation
if(phoneInput) {
  phoneInput.oninput = () => {
    phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

    if (phoneInput.value.length > phoneInput.maxLength) {
      phoneInput.value = phoneInput.value.slice(0, phoneInput.maxLength);
    }
  }
}

if(nameInput) {
  nameInput.oninput = () => {
    nameInput.value = nameInput.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, "");
  }
}

if(phoneModalInput) {
  phoneModalInput.oninput = () => {
    phoneModalInput.value = phoneModalInput.value.replace(/[^0-9]/g, "");

    if (phoneModalInput.value.length > phoneModalInput.maxLength) {
      phoneModalInput.value = phoneModalInput.value.slice(0, phoneModalInput.maxLength);
    }
  }
}

if(nameModalInput) {
  nameModalInput.oninput = () => {
    nameModalInput.value = nameModalInput.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, "");
  }
}

// TODO добавить дизейбл на кнопку при невалидной форме

if (mainPage && mediaQuery) {
  // Sticky header
  const headerLogo = document.getElementById("header-logo");
  const headerPhone = document.getElementById("header-phone");
  const navigation = document.getElementById("navigation-list");

  

  if (header) {
    header.classList.remove('sticky');
    navigation.classList.remove('w-3/4');
    navigation.classList.add('w-full');

    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      let scrollPercentRounded = Math.round(scrollPercent * 100);
      if (scrollPercentRounded > 41) {
        header.classList.add('fixed', 'bg-blue-500');
        headerLogo.classList.remove('first-hidden');
        headerPhone.classList.remove('first-hidden');
        navigation.classList.add('w-3/4');
        navigation.classList.remove('w-full');
      } else {
        if (header.classList.contains('fixed', 'bg-blue-500')) {
          header.classList.remove('fixed', 'bg-blue-500');
          headerLogo.classList.add('first-hidden');
          headerPhone.classList.add('first-hidden');
        }
        if (navigation.classList.contains('w-3/4')) {
          navigation.classList.remove('w-3/4');
          navigation.classList.add('w-full');
        }
      }
    });
  };
};

// Collapse navigation services
const collapseBtns = Array.from(document.querySelectorAll('.collapse-btn'));
const collapseContent = (el) => {
  el.nextElementSibling.classList.toggle('sr-only');
}

collapseBtns.forEach(item => {
  item.addEventListener('click', () => collapseContent(item))
});


// modal window
const modalBtns = Array.from(document.querySelectorAll('.open-btn'));
const modal = document.getElementById('modal');
const backdrop = document.getElementById('modal-backdrop');
const actionBtn = document.getElementById('act-btn');
const closeBtn = document.getElementById('close-btn');

const openModal = () => {
  modal.classList.remove('fade');
  backdrop.classList.remove('fade');
  backdrop.classList.add('invert');
}

const closeModal = () => {
  modal.classList.add('fade');
  backdrop.classList.add('fade');
  backdrop.classList.remove('invert');
}

if (modalBtns && modal && backdrop) {
  modalBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
}

if (mediaMobileQuery) {
  const menuCloseBtn = document.getElementById('menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const burger = document.getElementById('burger');
  const otherServices = document.getElementById('other-service');

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
  }
  const openMenu = () => {
    mobileMenu.classList.remove('hidden');
  }

  if (mainPage) {
    mainPage.prepend(header);
  }

  menuCloseBtn.addEventListener('click', closeMenu);
  burger.addEventListener('click', openMenu);
}