import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const CURRENT_TIME = "videoplayer-current-time";

const player = new Player(iframe);

    player.on('timeupdate', throttle(timeUpdate, 1000));


    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const restartTime = JSON.parse(localStorage.getItem(CURRENT_TIME)) ?? 0;

    player.setCurrentTime(restartTime.seconds).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':

                break;
    
            default:
                break;
        }
    });

    function timeUpdate(data) {
        // console.log('played the video!');
      const time = JSON.stringify(data);
      localStorage.setItem(CURRENT_TIME, time)
    };
