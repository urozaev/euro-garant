import "tailwindcss/tailwind.css";
import "./style.css";

const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');
const nameModalInput = document.getElementById('name-modal');
const phoneModalInput = document.getElementById('phone-modal');

// Form validation
phoneInput.oninput = () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9]/g, "");

  if (phoneInput.value.length > phoneInput.maxLength) {
    phoneInput.value = phoneInput.value.slice(0, phoneInput.maxLength);
  }
}
  
nameInput.oninput = () => {
  nameInput.value = nameInput.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, "");
}

phoneModalInput.oninput = () => {
  phoneModalInput.value = phoneModalInput.value.replace(/[^0-9]/g, "");

  if (phoneModalInput.value.length > phoneModalInput.maxLength) {
    phoneModalInput.value = phoneModalInput.value.slice(0, phoneModalInput.maxLength);
  }
}
  
nameModalInput.oninput = () => {
  nameModalInput.value = nameModalInput.value.replace(/[^а-яА-ЯёЁa-zA-Z]/g, "");
}

// TODO добавить дизейбл на кнопку при невалидной форме


// Sticky header
const navigation = document.querySelector("#navigation");

if (navigation) {
  window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded > 41) {
      navigation.classList.add('fixed','h-14', 'bg-blue-500');
    } else {
      if (navigation.classList.contains('fixed', 'h-14', 'bg-blue-500')) {
        navigation.classList.remove('fixed', 'h-14', 'bg-blue-500');
      }
    }
  });
};

// Collapse navigation
const collapseBtns = Array.from(document.querySelectorAll('.collapse-btn'));
const collapseContent = (el) => {
  // collapseBtns.find(item => !item.nextElementSibling.classList.contains('sr-only').classList.add('sr-only'));
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

