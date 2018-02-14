const autoplayBtn = document.querySelector('.play-pause-global');

function setupControls () {
  setAutoplaySetting(getAutoplaySetting());

  autoplayBtn.addEventListener('click', () => {
    setAutoplaySetting(!getAutoplaySetting());
  });
}

function getAutoplaySetting () {
  let autoplay = window.localStorage.getItem('autoplay');
  if (autoplay === 'true' || autoplay === null) {
    return true;
  }
  return false;
}

function setAutoplaySetting (autoplay) {
  setAutoplayBtn(autoplay);
  if (autoplay) {
    window.localStorage.setItem('autoplay', 'true');
    return;
  }
  window.localStorage.setItem('autoplay', 'false');
}

function setAutoplayBtn (autoplay) {
  if (autoplay) {
    autoplayBtn.classList.remove('paused');
  } else {
    autoplayBtn.classList.add('paused');
  }
  setGifState(autoplay);
}

function setGifState (autoplay) {
  let mp4List = document.querySelectorAll('video');

  if (autoplay) {
    mp4List.forEach(mp4 => {
      mp4.play();
    });
  } else {
    mp4List.forEach(mp4 => {
      mp4.pause();
      //addGifEventListener(mp4);
    });
  }
}

function addGifEventListener (mp4) {
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
/*
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
}*/

export {setupControls, getAutoplaySetting, setAutoplaySetting, setAutoplayBtn, setGifState, addGifEventListener};
