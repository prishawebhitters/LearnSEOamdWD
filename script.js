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

document.addEventListener("DOMContentLoaded", function() {
  const associatedContainer = document.querySelector('.associated-container');
  const associatedSlider = document.querySelector('.associated-slider');
  
  if (associatedSlider) {
      // Duplicate slides to create seamless infinite scroll
      const slides = Array.from(associatedSlider.children);
      const totalSlides = slides.length;
      
      // Clone slides and append to create continuous scroll effect
      slides.forEach(slide => {
          const clonedSlide = slide.cloneNode(true);
          associatedSlider.appendChild(clonedSlide);
      });
  }
})

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

 // Scroll to the top on button click
 $(document).on('click', '#scrollToTop', function () {
  $('html, body').animate({ scrollTop: 0 }, 'fast');
});