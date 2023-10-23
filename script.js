

let portfolioButtons = document.querySelectorAll('.portfolio-button');
for (let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].addEventListener('mousedown', () => {
        timeout = setInterval(() => {
            window.scrollBy(0, -1); 
        }, 0); 
        return false;
    });
}

