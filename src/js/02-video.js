import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const play = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(play, 1000));

// const currentTime = Number(localStorage.getItem('videoplayer-current-time'));
// player.setCurrentTime(currentTime).then(function (seconds) {
//   // seconds = the actual time that the player seeked to
// })

player.on('loaded', () => {
  currentTime = localStorage.getItem('videoplayer-current-time') || 0;
  player.setCurrentTime(currentTime);
});