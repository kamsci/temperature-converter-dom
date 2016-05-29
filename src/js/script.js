var inputTemp = document.getElementById('uInput');
var submit = document.getElementById('userTemp');
var answer = document.getElementById('output');

var tempF = document.getElementById('F');
var tempC = document.getElementById('C');

var reset = document.getElementById

submit.addEventListener('click', function(event) {
  event.preventDefault(event);

  if (tempF.checked) {
    var convertedTemp = Math.round((inputTemp.value - 32) * (5/9));
      if (convertedTemp > 24) {
        answer.classList.add('hot');
        answer.classList.remove('cold');
        answer.classList.remove('perfect');
      } else if (convertedTemp < 24){
        answer.classList.add('cold');
        answer.classList.remove('hot');
        answer.classList.remove('perfect');
      } else if (convertedTemp == 24) {
        answer.classList.add('perfect');
        answer.classList.remove('cold');
        answer.classList.remove('hot');
      }
  } else if (tempC.checked) {
    var convertedTemp = Math.round(inputTemp.value * (9/5) + 32);
      if (convertedTemp > 75) {
        answer.classList.add('hot');
        answer.classList.remove('cold');
        answer.classList.remove('perfect');
      } else if (convertedTemp < 75){
        answer.classList.add('cold');
        answer.classList.remove('hot');
        answer.classList.remove('perfect');
      } else {
        answer.classList.add('perfect');
        answer.classList.remove('cold');
        answer.classList.remove('hot');
      }
  }
  console.log(answer);
  answer.innerHTML = convertedTemp;

}); // End Event Listener

