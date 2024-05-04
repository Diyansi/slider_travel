// Get DOM elements
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let timeDom = document.querySelector('.carousel .time');

// Move the first thumbnail item to the end
thumbnailBorderDom.appendChild(thumbnailBorderDom.firstElementChild);

// Set timeout and interval IDs
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, 7000);

// Function to show the next or previous slider
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    
    // Clear timeout for sliding effect
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, 300);

    // Clear interval for autoplay
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, 7000);
}

// Add click event listeners for next and previous buttons
nextDom.onclick = function () {
    showSlider('next');
}

prevDom.onclick = function () {
    showSlider('prev');
}
