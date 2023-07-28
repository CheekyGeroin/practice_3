import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const frame = document.querySelector('#vimeo-player');

const player = new Player(frame);

const parsedStorage = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (parsedStorage !== null) {
  try {
    player.setCurrentTime(parsedStorage);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

const saveCurrentTime = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));
