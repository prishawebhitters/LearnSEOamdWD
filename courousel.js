$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,             // Enable infinite loop
        margin: 10,             // Space between items
        autoplay: true,         // Enable autoplay
        autoplayTimeout: 3000,  // Set autoplay interval to 3 seconds
        responsive: {
            0: { items: 1 },    // 1 item for small screens
            600: { items: 2 },  // 2 items for tablets
            1000: { items: 4 }  // 4 items for larger screens
        }
    });
});

  