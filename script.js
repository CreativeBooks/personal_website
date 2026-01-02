function showPage(pageID) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none'
    });

    document.getElementById(pageID).style.display = 'flex';
}