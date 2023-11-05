let timer; // Variable to hold the setInterval timer
let running = false; // Flag to track if the stopwatch is running
let startTime; // Variable to store the start time

// Function to start the stopwatch
function startStopwatch() {
    if (!running) {
        startTime = Date.now() - (timer || 0); // Calculate elapsed time
        timer = setInterval(updateTime, 1000); // Update time every second
        running = true;
    }
}

// Function to stop the stopwatch
function stopStopwatch() {
    clearInterval(timer);
    running = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
    clearInterval(timer);
    running = false;
    document.getElementById('timerDisplay').textContent = '0:00:00';
}

// Function to update the displayed time
function updateTime() {
    const currentTime = Date.now();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
    const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

// Add event listeners to the buttons
document.getElementById('startBtn').addEventListener('click', startStopwatch);
document.getElementById('stopBtn').addEventListener('click', stopStopwatch);
document.getElementById('resetBtn').addEventListener('click', resetStopwatch);
