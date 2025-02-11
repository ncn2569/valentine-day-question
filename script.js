document.getElementById("showMessage").addEventListener("click", function () {
    document.getElementById("loveMessage").classList.remove("hidden");
});
setInterval(() => {
    let rose = document.createElement("div");
    rose.innerHTML = "🌹"; // Icon hoa hồng
    rose.style.position = "fixed";
    rose.style.left = Math.random() * window.innerWidth + "px";
    rose.style.top = "-20px";
    rose.style.fontSize = "2em";
    rose.style.animation = "fall 4s linear";
    document.body.appendChild(rose);
    
    setTimeout(() => rose.remove(), 4000);
}, 300);

document.head.innerHTML += `
<style>
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}
</style>
`;
