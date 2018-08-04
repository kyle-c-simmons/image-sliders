let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let current = 0;

// Clear all images
function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}


// show prev
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

// Left arrow click
arrowLeft.addEventListener('click', function () {
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Left arrow click
arrowRight.addEventListener('click', function () {
    if(current === sliderImages.length-1) {
        current = -1;
    }
    slideRight();
});


startSlide();
