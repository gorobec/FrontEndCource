;(function () {
    let prev = document.getElementsByClassName('prev')[0],
        next = document.getElementsByClassName('next')[0],
        img = document.getElementsByTagName('img'),
        containerImg = document.getElementsByClassName('image-carousel')[0],
        bubbleContainer = document.getElementsByClassName('bubbles')[0],
        currentIdx = 0,
        bubbles = [];

    for (let i = 0; i < img.length; i++) {
        let bubble = document.createElement('span');
        bubble.classList.add('bubble-point');
        if(i === 0) {
            bubble.classList.add('active');
        }
        bubbles.push(bubble);

        bubbleContainer.appendChild(bubble);
        bubble.addEventListener('click', function () {
            currentIdx = i;

            switchImg();
        })
    }

    prev.addEventListener('click', function () {
        currentIdx--;

        if (currentIdx < 0) {
            currentIdx = img.length - 1;
        }

        switchImg();
    });

    next.addEventListener('click', function () {
        currentIdx++;

        if (currentIdx >= img.length) {
            currentIdx = 0;
        }

        switchImg();
    });

    function switchImg() {
        containerImg.style.left = -540 * currentIdx + 'px';

        bubbles.forEach(function (item, key) {
            if (key === currentIdx) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        })
    }
    setInterval(function () {
        currentIdx++;

        if (currentIdx >= img.length) {
            currentIdx = 0;
        }

        switchImg()
    }, 3000)
}());



