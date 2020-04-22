function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const setRandomColor = () => {
  const randomColor = getRandomColor();
  const list = document.querySelectorAll('.container-fluid, .btn');
  list.forEach((e) => {
    e.style.transition = 'all 2s';
    e.style.backgroundColor = randomColor;
  });
};

 const getQuote = async () => {
  setRandomColor();
  let result = [];
  await fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => (result = data));
  let element = document.querySelector('.blockquote');
  element.innerHTML = result[Math.floor(Math.random() * result.length)].text;
};

window.onload = getQuote();
