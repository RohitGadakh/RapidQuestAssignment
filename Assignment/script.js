document.addEventListener('DOMContentLoaded', function () {
    const videoInput = document.getElementById('videoInput');
    const videoPlayer = document.getElementById('videoPlayer');

    videoInput.addEventListener('change', function () {
        const file = videoInput.files[0];
        const videoObjectURL = URL.createObjectURL(file);
        videoPlayer.src = videoObjectURL;
    });
});
