function showSurprise() {
    const message = document.getElementById("surpriseMessage");

    if (!message) return;

    message.classList.toggle("show");

    if (message.classList.contains("show")) {
        createHearts();
    }
}

function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "floating-heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (2 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}