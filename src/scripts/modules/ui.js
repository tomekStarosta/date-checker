// date picker import
import flatpickr from "flatpickr";

// import calculator logic object
import calculate from './calculate';

// define ui object to group ui methods
const ui = {

  // initialise flatpickr instance
  initPicker: function() {
    const dateInput = document.querySelector('.input-group__input');
  
    const config = {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      onChange: calculate.diff,
      onClose: function(selectedDates) {
        if(!selectedDates[0]) {
          ui.pickrInstance.jumpToDate(Date.now());
        }
      }
    }


    ui.pickrInstance = flatpickr(dateInput, config);
  },

  displayOutput: function(msg) {

    // all output elements are displayed, just modify msg
    if(document.querySelector('.output').firstChild) {
      document.querySelector('.output__text').textContent = msg;

    // output element doesn't exist, create elements and display msg
    } else {
      const outputText = document.createElement('p');
      outputText.className = 'output__text';
      outputText.textContent = msg;
  
      const clearBtn = document.createElement('a');
      clearBtn.className = 'btn';
      clearBtn.textContent = 'Clear';
  
      document.querySelector('.output').appendChild(outputText);
      document.querySelector('.output').appendChild(clearBtn);
  
      // add event listener to 'clear' button
      clearBtn.addEventListener('click', ui.clearOutput);
    }
  },

  clearOutput: function() {
    // remove all children of output element
    const outputDiv = document.querySelector('.output');

    while(outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }

    // reset calendar to current date and clear input field
    ui.pickrInstance.jumpToDate(Date.now());
    ui.pickrInstance.clear();
  }

}

export default ui;