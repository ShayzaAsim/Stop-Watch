let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;
let isPaused = false;

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

function startTimer() {
    if (!intervalId) {  // Only start if not already running
        intervalId = setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplayTime();
        }, 1000);
        isPaused = false;
    }
}

function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;  // Reset intervalId to allow restarting
    isPaused = true;
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;  // Reset intervalId
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplayTime();
    isPaused = false;
}

function updateDisplayTime() {
    let displayTime = document.getElementById('displayTime');
    displayTime.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}