// date picker import
import flatpickr from "flatpickr";

// import calculator logic object
import calculate from './calculate';

const ui = {

  initPicker: function() {
    const dateInput = document.querySelector('.input-group__input');
  
    const config = {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      onChange: calculate.diff
    }


    ui.pickrInstance = flatpickr(dateInput, config);
  },

  displayOutput: function(msg) {
    if(document.querySelector('.output').firstChild) {
      document.querySelector('.output__text').textContent = msg;
    } else {
      const outputText = document.createElement('p');
      outputText.className = 'output__text';
      outputText.textContent = msg;
  
      const clearBtn = document.createElement('a');
      clearBtn.className = 'btn';
      clearBtn.textContent = 'Clear';
  
      document.querySelector('.output').appendChild(outputText);
      document.querySelector('.output').appendChild(clearBtn);
  
      clearBtn.addEventListener('click', ui.clearOutput);
    }
  },

  clearOutput: function() {
    const outputDiv = document.querySelector('.output');

    while(outputDiv.firstChild) {
      outputDiv.removeChild(outputDiv.firstChild);
    }

    // reset calendar and input field
    ui.pickrInstance.jumpToDate(Date.now());
    ui.pickrInstance.clear();
  }

}

export default ui;