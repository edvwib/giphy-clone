const playGlobal = document.querySelector('.play-global');
const pauseGlobal = document.querySelector('.pause-global');

export default function (play) {
  setControllState(play);

  playGlobal.addEventListener('click', () => {
    window.localStorage.setItem('global-play', 'true');
    setControllState(true);
  });
  pauseGlobal.addEventListener('click', () => {
    window.localStorage.setItem('global-play', 'false');
    setControllState(false);
  });

  setTimeout(() => {
    if (window.localStorage.getItem('global-play') === 'false') {
      document.querySelectorAll('video').forEach(mp4 => {
        mp4.addEventListener('mouseover', () => {
          mp4.play();
          displayProgressBar(mp4, true);
        });
        mp4.addEventListener('mouseleave', () => {
          mp4.pause();
          displayProgressBar(mp4, false);
        });
      });
    }
  }, 1200);
}

function setControllState (play) {
  if (play) {
    playGlobal.classList.add('active');
    pauseGlobal.classList.remove('active');
  } else {
    pauseGlobal.classList.add('active');
    playGlobal.classList.remove('active');
  }
  setVideoState(play);
}

function setVideoState (play) {
  let mp4List = document.querySelectorAll('video');
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

function displayProgressBar (mp4, hover) {
  if (hover) {
    let rect = mp4.getBoundingClientRect();

    let bar = document.createElement('div');
    bar.classList.add('progressbar');

    let barContainer = document.createElement('div');
    barContainer.classList.add('progressbar-container');
    barContainer.style.width = rect.width + 'px';
    barContainer.style.left = rect.x + 'px';
    barContainer.style.top = rect.y + rect.height + 'px';


    barContainer.appendChild(bar);
    console.log(rect);
    document.body.querySelector('.gallery').appendChild(barContainer);
    setInterval(function () {
      bar.style.width = (mp4.currentTime/mp4.duration)*100 + '%';
    }, 1000);
  } else {
    document.querySelector('.progressbar-container').remove();
  }

}
