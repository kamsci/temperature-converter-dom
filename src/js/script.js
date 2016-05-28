console.log('Hello, front end');

document.addEventListener('DOMContentLoaded', function() {
  // add document functions that snatch from DOM under here..
  var htmlSubmit = document.getElementById('submitTemp');

  htmlSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    var radio = document.querySelector('input[name="tempType"]:checked').value;

    if (radio === "C") {
      var temp = document.getElementById('tempInput').value;
      console.log(temp);

      var fTemp = temp * 1.8 + 32;
      fTempRound = Math.floor(fTemp);
      console.log(fTempRound);

      var jsOutput = getElementsByClassName('output');
      jsOutput.textContent = fTempRound;
    } else {
      var temp = document.getElementById('tempInput').value;
      console.log(temp);

      var cTemp = (temp - 32) / 1.8;
      cTempRound = Math.floor(cTemp);
      console.log(cTempRound);

      var jsOutput = getElementsByClassName('output');
      jsOutput.textContent = cTempRound;
    }
  });
});
