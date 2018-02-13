const autoplayBtn = document.querySelector('.play-pause-global');

export default function (autoplay) {
  setAutoplayState(autoplay);

  autoplayBtn.addEventListener('click', () => {
    if (window.localStorage.getItem('autoplay') === 'true') {
      window.localStorage.setItem('autoplay', 'false');
    } else {
      window.localStorage.setItem('autoplay', 'true');
    }
    setAutoplayState(window.localStorage.getItem('autoplay'));
  });
}

function setAutoplayState (autoplay) {
  if (autoplay === 'false') {
    autoplayBtn.classList.add('paused');
  } else {
    autoplayBtn.classList.remove('paused');
  }
  setVideoState(autoplay);
}

function setVideoState (autoplay) {
  let mp4List = document.querySelectorAll('video');

  if (autoplay === 'true') {
    mp4List.forEach(mp4 => {
      mp4.play();
    });
  } else {
    mp4List.forEach(mp4 => {
      mp4.pause();
      addVideoEventListener(mp4);
    });
  }
}

function addVideoEventListener (mp4) {
  setTimeout(() => {
    if (window.localStorage.getItem('global-play') === 'false') {
      mp4.addEventListener('mouseover', () => {
        displayProgressBar(mp4, true);
        mp4.play();
      });
      mp4.addEventListener('mouseleave', () => {
        displayProgressBar(mp4, false);
        mp4.pause();
        mp4.currentTime = 0;
      });
    }
  }, 1200);
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
    document.querySelector('.gallery').appendChild(barContainer);

    bar.style.width = (mp4.currentTime / mp4.duration) * 100 + '%';
    setInterval(function () {
      let percent = (mp4.currentTime / mp4.duration) * 100 + '%';
      bar.style.width = percent;
    }, 100 / 3);
  } else {
    if (document.querySelector('.progressbar-container') !== null) {
      document.querySelector('.progressbar-container').remove();
    }
  }
}
