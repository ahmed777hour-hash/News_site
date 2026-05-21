document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    // FIFA World Cup 2026 kickoff date: June 11, 2026
    const countDownDate = new Date("June 11, 2026 18:00:00").getTime();

    // Update the count down every 1 second
    const countdownInterval = setInterval(() => {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        const daysElement = document.getElementById("days");
        const hoursElement = document.getElementById("hours");
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        if (daysElement) daysElement.innerText = days.toString().padStart(2, '0');
        if (hoursElement) hoursElement.innerText = hours.toString().padStart(2, '0');
        if (minutesElement) minutesElement.innerText = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.innerText = seconds.toString().padStart(2, '0');

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(countdownInterval);
            const container = document.querySelector(".countdown-container");
            if (container) {
                container.innerHTML = "<div class='countdown-finished'>انطلقت البطولة الآن! 🏆</div>";
            }
        }
    }, 1000);
});
