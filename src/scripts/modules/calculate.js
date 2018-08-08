// import ui object
import ui from './ui'

const calculate = {
  
  diff: function(selectedDates) {
    const dateStamp = new Date(selectedDates).getTime();

    const diffDays = Math.floor((Date.now() - dateStamp) / 86400000);

    calculate.getMessage(diffDays);
  }, 

  getMessage: function(diff) {
    if (diff > 1) {
      ui.displayOutput(`Selected date was ${diff} days ago.`);
    } else if (diff < -1) {
      ui.displayOutput(`Selected date is ${-diff} days away.`);
    } else if (diff === -1) {
      ui.displayOutput('Selected date is tomorrow.');
    } else if (diff === 1) {
      ui.displayOutput('Selected date was yesterday.');
    } else if (diff === 0) {
      ui.displayOutput('Selected date is today.')
    }
  }

}

export default calculate;