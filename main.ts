const video = <HTMLVideoElement>document.getElementById('video')
const play = <HTMLButtonElement>document.getElementById('ply')
let isPlaying: boolean = false;
const timeLine = <HTMLDivElement>document.getElementById('timeLine')
const timelineWidth = <HTMLInputElement>document.getElementById('time')
const currentTime = <HTMLSpanElement>document.getElementById('currentTime')
const btnPlay = <HTMLButtonElement>document.getElementById('play')
const vol = <HTMLInputElement>document.getElementById('volume')
play.addEventListener("click", () => {

    
    timeLine.classList.add('show')
    setTimeout(()=>{
        timeLine.classList.remove('show')
    }, 3000)
    if (isPlaying === true) {
        video.pause();
        isPlaying =false
        play.innerHTML = `<i class="fa-solid fa-play"></i>`
        
    }
    else{
        isPlaying = true
        video.play()
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        
     
    }
})
vol.addEventListener('click' , ()=>{
    video.volume = Number(vol.value)
})
btnPlay.addEventListener('click' , ()=>{
    timeLine.classList.add('show')
    setTimeout(()=>{
        timeLine.classList.remove('show')
    }, 3000)
    if (isPlaying === true) {
        video.pause();
        isPlaying =false
        play.innerHTML = `<i class="fa-solid fa-play"></i>`
        
    }
    else{
        isPlaying = true
        video.play()
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        
     
    }
})
setInterval(()=>{
    let time = video.currentTime ;
    timelineWidth.value = String(Math.floor(time))
    let s = Math.floor(time % 60)
    let min = Math.floor(time/60)
    currentTime.innerText = `${min}:${s}`
},1000)
timelineWidth.addEventListener('click' , ()=>{
    video.currentTime = Number(timelineWidth.value)
})