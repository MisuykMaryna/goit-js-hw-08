
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const STORAGE_KEY = "videoplayer-current-time";

 const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem(STORAGE_KEY, seconds);
}, 1000));



player.on('loaded', () => {
  const currentTime = localStorage.getItem(STORAGE_KEY) || 0;
  player.setCurrentTime(currentTime);
});