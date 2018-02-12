const playPauseGlobal = document.querySelector('.play-pause-global');
const playGlobal = document.querySelector('.play-global');
const pauseGlobal = document.querySelector('.pause-global');

export default function (play){
  setControllState(play);

  playGlobal.addEventListener('click', () => {
    localStorage.setItem('global-play', 'true');
    setControllState(true);
  });
  pauseGlobal.addEventListener('click', () => {
    localStorage.setItem('global-play', 'false');
    setControllState(false);
  });
}

function setControllState(play){
  if (play) {
    playGlobal.classList.add('active');
    pauseGlobal.classList.remove('active');
  } else {
    pauseGlobal.classList.add('active');
    playGlobal.classList.remove('active');
  }
  setVideoState(play);
}

function setVideoState(play){
  let mp4List = document.querySelectorAll('video');
  console.log(mp4List);
  if (play) {
    mp4List.forEach(mp4 => {
      mp4.play();
    });
  } else {
    mp4List.forEach(mp4 => {
      mp4.pause();
    });
  }
}
