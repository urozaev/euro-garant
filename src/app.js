import "tailwindcss/tailwind.css";
import "./style.css";

const nameInput = document.getElementById('name-input');
const phoneInput = document.getElementById('phone-input');

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
let numOfClicks = 0;
const collapseBtns = Array.from(document.querySelectorAll('.collapse-btn'));
const collapseContent = (el) => {
  // collapseBtns.find(item => !item.nextElementSibling.classList.contains('sr-only').classList.add('sr-only'));
  el.nextElementSibling.classList.toggle('sr-only');
}

collapseBtns.forEach(item => {
  item.addEventListener('click', () => collapseContent(item))
});

