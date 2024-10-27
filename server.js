const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/videos', (req, res) => {
    // Przykładowa lista filmów
    const videos = [
        { title: 'Example Video 1', thumbnail: 'https://via.placeholder.com/300x150' },
        { title: 'Example Video 2', thumbnail: 'https://via.placeholder.com/300x150' },
        { title: 'Example Video 3', thumbnail: 'https://via.placeholder.com/300x150' }
    ];
    res.json(videos);
});

app.listen(port, () => {
    console.log(`WatchHub is running at http://localhost:${port}`);
});
