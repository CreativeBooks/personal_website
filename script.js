function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.insertBefore(starsContainer, document.body.firstChild);  // Changed this line
    
    // Create 50 stars
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random horizontal position
        star.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (3-8 seconds)
        star.style.animationDuration = (Math.random() * 5 + 3) + 's';
        
        // Random delay so they don't all start at once
        star.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        starsContainer.appendChild(star);
    }
}
window.addEventListener('load', createStars);


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

