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
  const index = Math.floor(Math.random() * result.length);
  let element = document.querySelector('.blockquote');
  let author = document.querySelector('#author');
  element.innerHTML = result[index].text;
  console.log(result[index].author);
  if (author) author.innerHTML = result[index].author;
};

window.onload = getQuote();
