document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h3');
  const speed = 2500;
  let maxTarget = 0;
  let completedCounters = 0;


  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-02');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-02');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        if (completedCounters === counters.length) {

        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h3');
  const speed = 2700;
  let maxTarget = 0;
  let completedCounters = 0;


  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-03');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-03');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;


        if (completedCounters === counters.length) {

        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h3');
  const speed = 1000;
  let maxTarget = 0;
  let completedCounters = 0;

  // Find the maximum target value to determine when all counters should stop
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        // Check if all counters have completed
        if (completedCounters === counters.length) {
          // console.log("All counters have finished counting.");
          // Optionally, you can trigger additional actions here
        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.numberdiv h3');
  const speed = 600;
  let maxTarget = 0;
  let completedCounters = 0;

  // Find the maximum target value to determine when all counters should stop
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-01');
    if (target > maxTarget) {
      maxTarget = target;
    }
  });

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target-01');
    const increment = target / speed;

    const updateCount = () => {
      let count = +counter.innerText;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, speed / maxTarget);
      } else {
        counter.innerText = target;
        completedCounters++;

        // Check if all counters have completed
        if (completedCounters === counters.length) {
          // console.log("All counters have finished counting.");
          // Optionally, you can trigger additional actions here
        }
      }
    };

    counter.innerText = '0';
    updateCount();
  });
});


// ==============review slider-========================

document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.slider-container');
  var slides = sliderContainer.children;
  var slideCount = slides.length;
  var slideWidth = slides[0].offsetWidth;
  var slideDuration = 2000;
  var currentIndex = 0;
  var intervalId;
  var stopSlideId = 'stopSlide';
  function autoSlide() {
    intervalId = setInterval(function () {
      currentIndex = (currentIndex + 1) % slideCount;
      moveSlide(currentIndex);
      if (slides[currentIndex].id === stopSlideId) {
        clearInterval(intervalId);
        setTimeout(function () {
          currentIndex = 0;
          moveSlide(currentIndex);
          autoSlide();
        }, slideDuration);
      }
    }, slideDuration);
  }

  function moveSlide(index) {
    sliderContainer.style.transition = 'transform 0.3s ease-in-out';
    sliderContainer.style.transform = 'translateX(' + (-index * slideWidth) + 'px)';
  }

  autoSlide();
  sliderContainer.addEventListener('mouseenter', function () {
    clearInterval(intervalId);
  });

  sliderContainer.addEventListener('mouseleave', function () {
    if (slides[currentIndex].id !== stopSlideId) {
      autoSlide();
    }
  });
});
// ==================pop-up-form==============
function showPopup() {
const popup = document.getElementById('popup1');
popup.style.display = 'flex';
popup.classList.add('show');
}

function closePopup() {
const popup = document.getElementById('popup1'); 
popup.classList.remove('show');
setTimeout(() => {
  popup.style.display = 'none'; 
}, 300);
} 
//  console.log(Date())
setTimeout(showPopup, 10000);

//Many more
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and additional content
  const button = document.getElementById('show-more-btn');
  const additionalContent = document.getElementById('additional-content');

  // Add event listener to the button
  button.addEventListener('click', function () {
      if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
          additionalContent.style.display = 'block'; // Show the content
          button.textContent = 'Show Less'; // Update button text
      } else {
          additionalContent.style.display = 'none'; // Hide the content
          button.textContent = 'Many more'; // Revert button text
      }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons that should open the popup
  const openPopupButtons = document.querySelectorAll(".openPopup");
  const popupForm = document.getElementById("popupForm");
  const closePopupButton = document.getElementById("closePopup");

  // Attach event listeners to all buttons with class 'openPopup'
  openPopupButtons.forEach(button => {
    button.addEventListener("click", () => {
      popupForm.style.display = "flex"; // Show the popup
    });
  });

  // Close the popup form when the close button is clicked
  closePopupButton.addEventListener("click", () => {
    popupForm.style.display = "none"; // Hide the popup
  });

  // Close the popup when clicking outside the form
  window.addEventListener("click", (event) => {
    if (event.target === popupForm) {
      popupForm.style.display = "none"; // Hide the popup
    }
  });
});
// Welcome Popup
  document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("welcome-popup");
  const popupClose = document.getElementById("welcome-popup-close");

  // Check if the popup has been shown before
  const popupShown = localStorage.getItem("welcomePopupShown");

  if (!popupShown) {
      popup.style.display = "flex"; // Show the popup
      document.body.classList.add("popup-open"); // Disable scrolling
      localStorage.setItem("welcomePopupShown", "true"); // Mark popup as shown
  }

  // Close popup on clicking the close button
  popupClose.addEventListener("click", function () {
      popup.style.display = "none";
      document.body.classList.remove("popup-open"); // Enable scrolling again
  });
});