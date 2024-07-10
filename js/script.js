// header *************************

$(document).ready(function () {
    $('.menu-icon').click(function () {
        $('.nav-links').slideToggle();
        $('.open-icon').toggle();
        $('.close-icon').toggle();
    });
});

// banner js ***********************************************

$(document).ready(function () {
    var deskimages = $('.banner-image.desktop_imgbg1');

    var currentIndexbanner = 0;

    // Show the first image
    $(deskimages[currentIndexbanner]).addClass('active');

    // Function to change active image
    function changeImage() {
        var nextIndex = (currentIndexbanner + 1) % deskimages.length;

        $(deskimages[currentIndexbanner]).removeClass('active');
        $(deskimages[nextIndex]).addClass('active');

        currentIndexbanner = nextIndex;
    }

    // Change image every 3 seconds
    setInterval(changeImage, 3000); // Adjust time interval as needed
});

$(document).ready(function () {
    var mobimages = $('.banner-image.mobile_imgbg1');

    var currentIndexbanner = 0;

    // Show the first image
    $(mobimages[currentIndexbanner]).addClass('active');

    // Function to change active image

    function changeImage() {
        var nextIndex = (currentIndexbanner + 1) % mobimages.length;

        $(mobimages[currentIndexbanner]).removeClass('active');
        $(mobimages[nextIndex]).addClass('active');

        currentIndexbanner = nextIndex;
    }
    // Change image every 3 seconds
    setInterval(changeImage, 3000); // Adjust time interval as needed
});

//   ai ai_guardian *******************************

$(document).ready(function () {
    let currentIndex = 0;
    const totalItems = $('.tag').length;
    const intervalTime = 3000;

    function activateItem(index) {
        $('.tag, .dot').removeClass('active');
        $('.tag').eq(index).addClass('active');
        $('.dot').eq(index).addClass('active');

        $('.image').removeClass('active');
        $('.image').eq(index).addClass('active');

        const lineTop = 50 + index * 76;
        const lineHeight = 50 * (index + 1);
        $('.line-indicator').css({
            top: lineTop + 'px',
            height: lineHeight + 'px'
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        activateItem(currentIndex);
    }

    let interval = setInterval(nextItem, intervalTime);

    $('.tag, .dot').click(function () {
        clearInterval(interval);
        currentIndex = $(this).data('index');
        activateItem(currentIndex);
        interval = setInterval(nextItem, intervalTime);
    });

    activateItem(currentIndex);
});

// light ai ***********************
let slideIndex = 0;
showSlidesLightAi();

function showSlidesLightAi() {
    let i;
    let slides = document.getElementsByClassName("lightai_imagebox");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlidesLightAi, 3000); // Change image every 3 seconds
}

function currentSlide(n) {
    showSlidesLightAi(slideIndex = n);
}

// power *************************

$(document).ready(function () {
    function showSlidePower(index) {
        $('.blinking_imgslide').removeClass('active');
        $('.blinking_imgslide').eq(index).addClass('active');
    }

    let currentIndex = 0;
    setInterval(function () {
        currentIndex = (currentIndex + 1) % $('.blinking_imgslide').length;
        showSlidePower(currentIndex);
    }, 1000);

});

// fingertips*********************************

$(document).ready(function () {


    function animateImagesFingertip() {
        let images = $('.image');
        let index = 0;
        let currentIndex = index;
        let nextIndex = (index + 1) % images.length;
        let nextNextIndex = (index + 2) % images.length;
        $(images[nextNextIndex]).removeClass('hidden').addClass('show ');
        $(images[currentIndex]).removeClass('move-down').addClass('hidden ');

        $(images[nextIndex]).removeClass('show').addClass('move-down ');

        

        index = nextIndex;

        setTimeout(animateImagesFingertip, 4500);
    }

    // Initialize the positions
     images.addClass('show');
    $(images[0]).addClass('move-down');
    $(images[1]).addClass('show');
    $(images[2]).addClass('hidden');

    // Start the animation
    setTimeout(animateImagesFingertip, 500);
});

$(document).ready(function () {

    function showSlideCompletesecurity(index) {
        $('.complete_securityslide').toggleClass('active');
    }

    setInterval(function () {
        let currentIndex = 0;
        currentIndex = (currentIndex + 1) % $('.complete_securityslide').length;
        showSlideCompletesecurity(currentIndex)
    }, 500);

});
