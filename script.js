let audioElement1 = new Audio("taj.mp3");


const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        audioElement1.play();

        removeActiveclasses();
        panel.classList.add('active');
    })
})

function removeActiveclasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}