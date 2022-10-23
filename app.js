// buildGrid();
for (let i = 1; i < 17; i++) {
  let element = document.createElement('div');
  element.className = 'gridComp';
  document.getElementById('container').appendChild(element);
  element.innerText = i;
}

let allDivs = document.getElementsByClassName('gridComp');

for (let i = 0; i < allDivs.length; i++) {
  allDivs[i].addEventListener(
    'mouseover',
    () => {
      changeColour(allDivs[i]);
    },
    false
  );
}

function changeColour(a) {
  a.setAttribute('style', 'background-color:black');
}
