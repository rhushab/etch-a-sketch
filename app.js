for (let i = 1; i < 17; i++) {
  let element = document.createElement('div');
  element.className = 'gridComp';
  document.getElementById('container').appendChild(element);
  element.innerText = i;
}

var allDivs = document.querySelectorAll('.gridComp');

function changeColour(a) {
  a.backgroundColor;
}
