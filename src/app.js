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
  
  innInput.oninput = () => {
    innInput.value = innInput.value.replace(/[^0-9]/g, "");
  }