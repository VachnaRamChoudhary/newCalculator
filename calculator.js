var buttons = document.getElementsByClassName('btn');
var display1 = document.getElementById('display1');
var display2 = document.getElementById('display2');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var value = this.getAttribute('data-value');

    if (value == '=') {

      display2.innerText = "Ans : " +eval(display1.innerText);
    } else if (value == 'C') {
      display1.innerText = " ";
      display2.innerText = " ";
    } else if (value == 'B') {
      display1.innerText = display1.innerText.slice(0, -1);
    } else {
      display1.innerText += value;

    }

  });
}
