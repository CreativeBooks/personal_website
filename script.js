function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.insertBefore(starsContainer, document.body.firstChild);  
    
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
       
        star.style.left = Math.random() * 100 + '%';
        
        
        star.style.animationDuration = (Math.random() * 7 + 8) + 's';
        
        
        star.style.animationDelay = Math.random() * 5 + 's';
        
        
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        starsContainer.appendChild(star);
    }
}
window.addEventListener('load', createStars);
window.addEventListener('load', startCarousels);


function showPage(pageID) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none'
    });

    document.getElementById(pageID).style.display = 'flex';
}

function showPage(pageID){
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    document.getElementById(pageID).style.display = 'flex';
}

function startCarousels() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image img');
        let currentIndex = 0;

        setInterval(() => {
            images[currentIndex].classList.remove('active');

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add('active');
        }, 3000);
    })
}

async function fetchLastFmTracks() {
    const API_KEY = '0a67d5c7127be015de1e47f026d8c968';
    const USERNAME = 'pgarg1606';
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=6`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const container = document.getElementById('lastfm-tracks');
        container.innerHTML = '';
        
        const track = data.recenttracks.track[0] || data.recenttracks.track;  // Get first track
        
        // Check if currently playing
        const isPlaying = track['@attr'] && track['@attr'].nowplaying === 'true';
        
        const trackElement = document.createElement('div');
        trackElement.className = 'track-item';
        
        const imageUrl = track.image[3]['#text'] || track.image[2]['#text'] || 'placeholder.jpg';  // Use larger image
        
        trackElement.innerHTML = `
            <img src="${imageUrl}" alt="${track.name}">
            <p><strong>${track.name}</strong></p>
            <p>${track.artist['#text']}</p>
            ${isPlaying ? '<p style="color: #1DB954;">🎵 Now Playing</p>' : '<p>Last Played</p>'}
        `;
        
        container.appendChild(trackElement);
    } catch (error) {
        console.error('Error fetching Last.fm data:', error);
        document.getElementById('lastfm-tracks').innerHTML = '<p>Unable to load tracks</p>';
    }
}

// Call when page loads or when About page is shown
window.addEventListener('load', fetchLastFmTracks);

document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';

    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 800);
});
