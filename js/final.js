const songs = document.querySelectorAll('audio');
const divs = document.querySelectorAll('.kit div');

window.addEventListener('keydown', (e) =>{
  // The KeyCode
  let code = e.keyCode.toString();

  // Playing the audio if the keyCode is equal to the audio's ID.
  songs.forEach(song =>{
    if(code === song.id){
      song.play();
      song.currentTime =0;
    }
  });

  divs.forEach(div =>{
    if(code === div.id){
      div.classList.add('borderTransform');
      setTimeout( () => div.classList.remove('borderTransform'), 75);
    }
  })
});


const onClick = (event) => {
  clickCode = event.target.id

  songs.forEach(song =>{
    if(clickCode === song.id){
      song.play();
      song.currentTime =0;
    };

  divs.forEach(div =>{
    if(clickCode === div.id){
      div.classList.add('borderTransform');
      setTimeout( () => div.classList.remove('borderTransform'), 75);
    }
  })

})
}

window.addEventListener('click', onClick);
