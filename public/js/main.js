document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/videos')
        .then(response => response.json())
        .then(data => renderVideos(data));
});

function renderVideos(videos) {
    const videoList = document.getElementById('video-list');
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
            <p class="video-title">${video.title}</p>
        `;
        videoList.appendChild(videoItem);
    });
}
