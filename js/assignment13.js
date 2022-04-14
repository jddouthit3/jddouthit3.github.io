const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText
  let xItem = randomValueFromArray(insertX)
  let yItem = randomValueFromArray(insertY)
  let zItem = randomValueFromArray(insertZ)

  newStory = newStory.replace(/:insertX:/g, xItem);
  newStory = newStory.replace(/:insertY:/, yItem);
  newStory = newStory.replace(/:insertZ:/, zItem);

  if(customName.value !== '') {
    const name = customName.value;
    //find bob replace name
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14);
    //trun weight into string
    weightText = weight.toString() + ' stone';
    console.log(weightText)

    newStory = newStory.replace('300 pounds', weightText);
    //add string and ' stone' together
    const temperature =  Math.round((94-32)*5/9);

    tempText = temperature.toString() + ' centrigrade';

    newStory = newStory.replace('94 fahrenheit', tempText);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
