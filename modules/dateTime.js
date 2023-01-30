import { DateTime } from './luxon.min.js';

const displayTime = () => {
  const dates = document.querySelector('.dates');
  dates.textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
};

export default displayTime;
