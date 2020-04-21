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
    e.style.transition = "all 2s";
    e.style.backgroundColor = randomColor;
  });
};
