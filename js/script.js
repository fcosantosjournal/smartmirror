// get the video from the camera on PC and set to canvas div
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.log("An error occurred: " + err);
    });

// set the effect on canvas div
video.addEventListener('play', () => {
    const $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {
            context.drawImage($this, 0, 0);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
    })();
}, 0);

// set the time on the mirror



function init ( )
{
timeDisplay = document.createTextNode ( "" );
document.getElementById("clock").appendChild ( timeDisplay );
}

function updateClock ( )
{

/* get the current window width */
var windowWidth = $(window).width();
var windowHeight = $(window).height();
/* set the width of body tag css using the window width */
$('body').css('width', windowWidth - 2 + 'px');
$('body').css('height', windowHeight + 'px');
$('#video').css('width', windowWidth - 2 + 'px');
$('#video').css('height', windowHeight - 4 + 'px');
$('.youtube').css('width', windowWidth - 2 + 'px');
$('.youtube').css('height', windowHeight - 4 + 'px');
$('.youtube').css('margin-top', '-' + windowHeight - 3 + 'px');
$('.text').css('width', windowWidth - 2 + 'px');
$('.text').css('height', windowHeight - 4 + 'px');
$('.text').css('margin-top', '-' + windowHeight - 3 + 'px');
$('.buttons').css('width', windowWidth - 2 + 'px');
$('.buttons').css('height', windowHeight - 4 + 'px');
$('.buttons').css('margin-top', '-' + windowHeight - 2 + 'px');
$('#widget-botoes').css('margin-left', windowWidth - 520 + 'px');

/* get the current value of width attribute of the text class */
var textWidth = $('#widget-left').css('width');
$('#widget-youtube').css('width', textWidth);

var currentTime = new Date ( );

var currentHours = currentTime.getHours ( );
var currentMinutes = currentTime.getMinutes ( );
var currentSeconds = currentTime.getSeconds ( );

// Pad the minutes and seconds with leading zeros, if required
currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

// Choose either "AM" or "PM" as appropriate
var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

// Convert the hours component to 12-hour format if needed
currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

// Convert an hours component of "0" to "12"
currentHours = ( currentHours == 0 ) ? 12 : currentHours;

// Compose the string for display
var currentTimeString = currentHours + ":" + currentMinutes + " " + timeOfDay;

// Update the time display
document.getElementById("clock").firstChild.nodeValue = currentTimeString;        

}

function playlistAudio() {
    const listMusic = [
        './audio/1.mp3',
        './audio/2.mp3'
    ];
    const audio = document.getElementById('audio').getAttribute('src');
    /* get the index of the current audio in the listMusic array */
    const index = listMusic.indexOf(audio);
    /* if the index is the last one, set the index to 0, else increment the index */
    const newIndex = index === listMusic.length - 1 ? 0 : index + 1;
    /* set the new audio */
    document.getElementById('audio').setAttribute('src', listMusic[newIndex]);
    /* play the new audio */
    document.getElementById('audio').play();    
}

function playAudio() {
    document.getElementById('audio').play();
    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'block';

}

function pauseAudio() {
    document.getElementById('audio').pause();
    document.getElementById('play').style.display = 'block';
    document.getElementById('pause').style.display = 'none';
}

function leftVolume() {
    document.getElementById('audio').volume += 0.1;
}

function rightVolume() {
    document.getElementById('audio').volume -= 0.1;
}

function showYoutube() {
    if(document.getElementsByClassName('youtube')[0].style.display == 'none') {
        document.getElementsByClassName('youtube')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('youtube')[0].style.display = 'none';
    }
}

const listYoutube = [
    'https://www.youtube.com/embed/DksSPZTZES0?autoplay=1&mute=0&enablejsapi=1',
    'https://www.youtube.com/embed/ey-iivCgeDY?autoplay=1&mute=0&enablejsapi=1',
    'https://www.youtube.com/embed/etAIpkdhU9Q?autoplay=1&mute=0&enablejsapi=1',
    'https://www.youtube.com/embed/NMNgbISmF4I?autoplay=1&mute=0&enablejsapi=1',
    'https://www.youtube.com/embed/7QU1nvuxaMA?autoplay=1&mute=0&enablejsapi=1',
];

function nextYoutube() {
    const youtube = document.getElementById('youtube-iframe').getAttribute('src');
    /* get the index of the current audio in the listMusic array */
    const index = listYoutube.indexOf(youtube);
    /* if the index is the last one, set the index to 0, else increment the index */
    const newIndex = index === listYoutube.length - 1 ? 0 : index + 1;
    
    if (newIndex == null) {
        document.getElementById('youtube-iframe').setAttribute('src', listYoutube[0]);
        document.getElementById('youtube-iframe').addAttribute('autoplay', 'true');
    }
    else{
        document.getElementById('youtube-iframe').setAttribute('src', listYoutube[newIndex]);
        document.getElementById('youtube-iframe').addAttribute('autoplay', 'true');
    }
}

function backYoutube() {
    const youtube = document.getElementById('youtube-iframe').getAttribute('src');
    /* get the index of the current audio in the listMusic array */
    const index = listYoutube.indexOf(youtube);
    /* set the next video by decrementing the index */
    const newIndex = index - 1;
    
    if (newIndex == -1) {
        document.getElementById('youtube-iframe').setAttribute('src', listYoutube[listYoutube.length - 1]);
        document.getElementById('youtube-iframe').addAttribute('autoplay', 'true');
    }
    else{
        document.getElementById('youtube-iframe').setAttribute('src', listYoutube[newIndex]);
        document.getElementById('youtube-iframe').addAttribute('autoplay', 'true');
    }
}