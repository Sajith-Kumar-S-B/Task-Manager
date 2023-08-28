let toggle = document.querySelector('.toggle');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let searchBx = document.querySelector('.search8x');
let searchOpen = document.querySelector('.searchOpen');
let searchClose = document.querySelector('.searchClose');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    left.classList.toggle('active');
    right.classList.toggle('overlay');
    body.style.overflow = 'hidden';
});
close.onclick = () => {
    toggle.classList.remove('active');
    left.classList.remove('active');
    right.classList.remove('overlay');
    body.style.overflow = '';
};
searchOpen.onclick = () => {
    searchBx.classList.add('active');
};
searchClose.onclick = () => {
    searchBx.classList.remove('active');
};
window.onclick = (e) => {
    if (e.target == right) {
        toggle.classList.remove('active');
        left.classList.remove('active');
        right.classList.remove('overlay');
        body.style.overflow = '';
    }
};



// project card


function toggleBlinking() {
    const prioritySection = document.querySelector('.blinking-priority');
    prioritySection.classList.toggle('blinking');
}

// Start blinking with a 3-second interval
setInterval(toggleBlinking, 1000);


document.addEventListener('DOMContentLoaded', function () {
    const taskDoneValueElement = document.getElementById('taskDoneValue');
    const lineBarElement = document.getElementById('lineBar');
    
    const targetTaskDoneValue = 24;
    const animationDuration = 2000; // 2 seconds in milliseconds
    const maxBarWidth = 65; // 70% max width

    const startTime = performance.now();
    function animate() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= animationDuration) {
            taskDoneValueElement.textContent = targetTaskDoneValue;
            lineBarElement.style.width = `${(targetTaskDoneValue / 50) * maxBarWidth}%`;
            return;
        }
        const progress = elapsedTime / animationDuration;
        const newValue = Math.floor(progress * targetTaskDoneValue);
        taskDoneValueElement.textContent = newValue;
        lineBarElement.style.width = `${(newValue / 50) * maxBarWidth}%`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});


// JavaScript code

// JavaScript code

// JavaScript code

document.addEventListener('DOMContentLoaded', function () {
    const processElement = document.querySelector('.process');

    // Initial fade-out
    processElement.classList.add('fade-out');

    // Fading back in after a delay
    setTimeout(function () {
        processElement.classList.remove('fade-out');
        processElement.classList.add('fade-in');
    }, 1000); // Fade-in after 3 seconds
});



// project 2

document.addEventListener('DOMContentLoaded', function () {
    const taskDoneValueElement = document.getElementById('taskDoneValue1');
    const lineBarElement = document.getElementById('lineBar1');
    
    const targetTaskDoneValue = 35;
    const animationDuration = 2000; // 2 seconds in milliseconds
    const maxBarWidth = 85; // 70% max width

    const startTime = performance.now();
    function animate() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime >= animationDuration) {
            taskDoneValueElement.textContent = targetTaskDoneValue;
            lineBarElement.style.width = `${(targetTaskDoneValue / 50) * maxBarWidth}%`;
            return;
        }
        const progress = elapsedTime / animationDuration;
        const newValue = Math.floor(progress * targetTaskDoneValue);
        taskDoneValueElement.textContent = newValue;
        lineBarElement.style.width = `${(newValue / 50) * maxBarWidth}%`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});


// project card

 // Get the HTML elements
 const tasksCompletedElement = document.getElementById("tasksCompleted");
 const progressPercentageElement = document.getElementById("progressPercentage");
 const progressCircleElement = document.getElementById("progressCircle").querySelector("circle");

 // Set initial values
 let currentTasksCompleted = 0;
 let currentPercentage = 0;
 let currentDashOffset = 226; // Corresponds to the circumference of the circle (2 * pi * r)

 // Function to update the numbers and progress circle
 function updateNumbersAndCircle() {
     if (currentTasksCompleted < 45) {
         currentTasksCompleted++;
         tasksCompletedElement.textContent = `${currentTasksCompleted}/67`;
     }

     if (currentPercentage < 81) {
         currentPercentage++;
         progressPercentageElement.textContent = `${currentPercentage}%`;
     }

     // Calculate the new dash offset
     currentDashOffset = 226 - (currentPercentage / 100) * 226;
     progressCircleElement.style.strokeDashoffset = currentDashOffset;
 }

 // Call updateNumbersAndCircle repeatedly to simulate the increase
 const interval = setInterval(() => {
     updateNumbersAndCircle();

     // Stop the interval when the values reach the desired numbers
     if (currentTasksCompleted === 45 && currentPercentage === 81) {
         clearInterval(interval);
     }
 }, 50); // Adjust the interval speed as needed



function logout(){
    localStorage.removeItem("email")
    localStorage.removeItem("password")

    window.location = "index.html"
}


