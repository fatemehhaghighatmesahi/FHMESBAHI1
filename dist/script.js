var click__count;


click__count = 0;


document.getElementById('button').addEventListener('click', (event) => {
  click__count = (typeof click__count === 'number' ? click__count : 0) + 1;
  event.target.innerText = click__count;

});