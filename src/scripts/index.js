// import stylesheet
import '../styles/index.scss';

// date picker import
import flatpickr from "flatpickr";

document.addEventListener('DOMContentLoaded', () => {
  const dateInput = document.querySelector('.date-input');
  
  const config = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
  }


  flatpickr(dateInput, config);
})

