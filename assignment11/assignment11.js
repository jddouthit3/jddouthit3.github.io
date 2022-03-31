const Kanye = document.getElementById('Kanye');
console.log("Kanye");
const Tyler = document.getElementById('Tyler');
const Will = document.getElementById('Will');
const Chris = document.getElementById('Chris');

Kanye.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage = "url('../img/Kanye.png')";
  console.log("potato");
});

Tyler.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage ="url('../img/Tyler.png')";
});

Will.addEventListener('click', function onClick(event) {
  let result = document.text.strike();
});
