function pauseMusic(){

    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
    
    audioPlayer.pause();
    audioContainer.addClass("music-player--disabled");
    
    console.log("pause music");
    }
    
    function playMusic(){
    
    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
    
    audioPlayer.play();
    audioContainer.removeClass("music-player--disabled");
    
    console.log("play music");
    }