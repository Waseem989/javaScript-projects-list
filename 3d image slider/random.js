
const imageContainer = 
    document.querySelector('.image-container');
const prevBtn = 
    document.getElementById('prev');
const nextBtn = 
    document.getElementById('next');
const overlay = 
    document.getElementById('overlay');
const popupImg = 
    document.getElementById('popup-img');
const images = 
    document.querySelectorAll('.image-container span img');
 
let x = 0;
prevBtn.addEventListener('click', () => {
    x = x + 45;
    rotate();
});
nextBtn.addEventListener('click', () => {
    x = x - 45;
    rotate();
});
 
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src');
        popupImg.setAttribute('src', src);
        overlay.classList.add('active');
    });
});
 
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});
 
function rotate() {
    imageContainer.style.transform = 
        `perspective(1000px) rotateY(${x}deg)`;
}