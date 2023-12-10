const video = document.getElementById("bgvideo")
const audio_btn = document.getElementById("audio")

const play_list = ["video3", "video", "video1", "video2", "video4"]
let peremotka = 0
function next(){
    if(peremotka>=play_list.length-1){
        peremotka=0
    } else{
        peremotka = peremotka + 1;
    }
    console.log(peremotka)
    video.src=`видео/${play_list[peremotka]}.mp4`
}
function back(){
    if(peremotka != 0){
        peremotka --;
    } else{
        peremotka = play_list.length-1;
    }
    console.log(peremotka)
    video.src=`видео/${play_list[peremotka]}.mp4`
}
function stop(){
    if(video.paused){
        video.play()

    } else{
        video.pause()
    }
}
function audio(){
    if(video.muted){
        video.muted = false
        audio_btn.innerHTML="mute"
    } else{
        video.muted = true
        audio_btn.innerHTML="unmute"
    }
}


