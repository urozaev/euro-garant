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

const navigation = document.querySelector("#navigation");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.offsetHeight;
  let winHeight = window.innerHeight;
  let scrollPercent = scrollTop / (docHeight - winHeight);
  let scrollPercentRounded = Math.round(scrollPercent * 100);
  if (scrollPercentRounded > 41) {
    navigation.classList.remove('container', 'h-28');
    navigation.classList.add('h-14');
  } else {
    navigation.classList.remove('h-14');
    navigation.classList.add('container', 'h-28');
  }
});
