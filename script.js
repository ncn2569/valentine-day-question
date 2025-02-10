document.getElementById("showMessage").addEventListener("click", function () {
    document.getElementById("loveMessage").classList.remove("hidden");
});
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = "2em";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}, 300);

document.head.innerHTML += `
<style>
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}
</style>
`;
