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
  var slideDuration = 4000;
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

// ====================== question section==================
const questions = document.querySelectorAll('.first-question1');
const answers = document.querySelectorAll('.first-question2');

questions.forEach((question, index) => {
question.addEventListener('click', function () {
  const answer =  [index];
  if (answer.classList.contains('show')) {
    answer.classList.remove('show');
  } else {
    answers.forEach(ans => ans.classList.remove('show'));
    answer.classList.add('show');
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

// Navigation controls
    document.getElementById("prev").addEventListener("click", function(event) {
      event.preventDefault();
      const container = document.querySelector(".carousel-inner");
      container.scrollBy({ left: -260, behavior: "smooth" });
    });

    document.getElementById("next").addEventListener("click", function(event) {
      event.preventDefault();
      const container = document.querySelector(".carousel-inner");
      container.scrollBy({ left: 260, behavior: "smooth" });
    });

    
    //captcha
    let captcha;
    function generate() {
    
        // Clear old input
        document.getElementById("submit").value = "";
    
        // Access the element to store
        // the generated captcha
        captcha = document.getElementById("image");
        let uniquechar = "";
    
        const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        // Generate captcha for length of
        // 5 with random character
        for (let i = 1; i < 5; i++) {
            uniquechar += randomchar.charAt(
                Math.random() * randomchar.length)
        }
    
        // Store generated input
        captcha.innerHTML = uniquechar;
    }
    
    function printmsg() {
        const usr_input = document
            .getElementById("submit").value;
    
        // Check whether the input is equal
        // to generated captcha or not
        if (usr_input == captcha.innerHTML) {
            let s = document.getElementById("key")
                .innerHTML = "Matched";
            generate();
        }
        else {
            let s = document.getElementById("key")
                .innerHTML = "not Matched";
            generate();
        }
    }
//---------FAQ----------
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));