const Kanye = document.getElementById('Kanye');
console.log("Kanye");
const Tyler = document.getElementById('Tyler');
const para = document.querySelector('p');

Kanye.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage = "url('../img/Kanye.png')";
  console.log("potato");
});

Tyler.addEventListener('click', function onClick(event) {
  document.body.style.backgroundImage ="url('../img/Tyler.png')";
});

para.addEventListener('click',fightWin);

function fightWin () {
  let name = prompt('Who wins? Choose carefully.');
  para.textContent = `I think that ${name} will win`;
  console.log(name);
  if(name === 'Will Smith') {
    alert('Just pure wrong.');
  } else if (name ==='Chris Rock') {
    alert('Excellent selection. My money is on him too.');
  }
}
