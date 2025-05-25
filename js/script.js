const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} 
let currentIndex = 0;

function activateNextPanel() {
    removeActiveClasses();
    panels[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % panels.length;
}

setInterval(activateNextPanel, 2000); // Change panel every 2 seconds

  