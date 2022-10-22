<?php
    require_once './Functions/Core.php';

    use Functions\Core;
    $core = new Core();

    $ip = $core->getIp();
    $temp = $core->getTemp();

?>
<!DOCTYPE html>
<html lang="pt-br">
    <!-- 
        Author: Francisco Santos
        Email: contato@fcosantos.pt
        Website: https://fcosantos.pt
        Github:     
    -->
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="./css/style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Smart Mirror</title>
    </head>

<body onload="updateClock(); setInterval('updateClock()', 1000 )" id="body">
    <!-- create a smart mirror in one web site html5 with access to camera on full screen, with effect on top of camera -->
    <video id="video" autoplay></video>
    <canvas id="canvas"></canvas>
    <div class="text currentTime">
        <div id="widget-left">
            <span class="top">
                <b>HOUR:</b>
            </span>
            <span id="clock">
                0:00 AM
            </span> -
            <span class="top">
                <b>IP:</b>
                <?= $ip ?>
            </span>
            <hr>
            <div class="temp">
                <h1>
                    TEMPERATURA:
                </h1>
                <span id="temp">
                    <b><?= $temp['c'] ?></b>Cº / <b><?= $temp['f'] ?></b>Fº
                </span>
            </div>
            <div class="audio">
                <h1>
                    Music: <b>Eletronic</b>
                </h1>
                <audio id="audio" onended="playlistAudio()" controls>
                    <source src="./audio/0.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
                <div class="controlPlay">
                    <div onclick="playAudio()" id="play" class="d-show play"><span class="fa fa-play"></span></div>
                    <div onclick="pauseAudio()" id="pause" class="d-hide pause"><span class="fa fa-pause"></span></div>
                    <div onclick="leftVolume()" id="plus" class="left-volume plus"><span class="fa fa-plus"></span></div>
                    <div onclick="rightVolume()" id="minus" class="right-volume minus"><span class="fa fa-minus"></span></div>
                </div>                
            </div>
        </div>
    </div>
    <div class="youtube d-hide">
        <div id="widget-youtube">
            <div class="temp">
                <h1>
                    Youtube:
                </h1>
                <iframe id="youtube-iframe" src="https://www.youtube.com/embed/DksSPZTZES0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="controls-youtube">
                    <span onclick="backYoutube()" id="back-youtube" class="d-show play fa fa-backward"></span>
                    <span onclick="nextYoutube()" id="next-youtube" class="d-show pause fa fa-forward"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="buttons">
        <div id="widget-botoes">
            <span class="fa-solid fa-circle-play" onclick="showYoutube()" id="youtube-button"></span>
        </div>
    </div>
    <script src="./js/script.js"></script>
</body>

</html>