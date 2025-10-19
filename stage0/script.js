const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = `Current time in milliseconds: ${currentTime}`;
}

updateTime();