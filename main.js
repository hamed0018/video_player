var video = document.getElementById('video');
var play = document.getElementById('ply');
var isPlaying = false;
var timeLine = document.getElementById('timeLine');
var timelineWidth = document.getElementById('time');
var currentTime = document.getElementById('currentTime');
var btnPlay = document.getElementById('play');
var vol = document.getElementById('volume');
play.addEventListener("click", function () {
    timeLine.classList.add('show');
    setTimeout(function () {
        timeLine.classList.remove('show');
    }, 3000);
    if (isPlaying === true) {
        video.pause();
        isPlaying = false;
        play.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    }
    else {
        isPlaying = true;
        video.play();
        play.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    }
});
vol.addEventListener('click', function () {
    video.volume = Number(vol.value);
});
btnPlay.addEventListener('click', function () {
    timeLine.classList.add('show');
    setTimeout(function () {
        timeLine.classList.remove('show');
    }, 3000);
    if (isPlaying === true) {
        video.pause();
        isPlaying = false;
        play.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    }
    else {
        isPlaying = true;
        video.play();
        play.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    }
});
setInterval(function () {
    var time = video.currentTime;
    timelineWidth.value = String(Math.floor(time));
    var s = Math.floor(time % 60);
    var min = Math.floor(time / 60);
    currentTime.innerText = "".concat(min, ":").concat(s);
}, 1000);
timelineWidth.addEventListener('click', function () {
    video.currentTime = Number(timelineWidth.value);
});
