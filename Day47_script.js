document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('video');
    var muteButton = document.getElementById('muteButton');

    muteButton.addEventListener('click', function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });
});
