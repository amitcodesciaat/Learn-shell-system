let viewCount = 0;
        const videoPlayer = document.getElementById('videoPlayer');
        const viewCountElement = document.getElementById('viewCount');

        videoPlayer.addEventListener('play', () => {
            viewCount++;
            viewCountElement.textContent = viewCount;
        });