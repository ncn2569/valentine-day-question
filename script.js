document.getElementById("showMessage").addEventListener("click", function () {
    let message1 = document.getElementById("loveMessage");
    let button = document.getElementById("showMessage");

    if (message1.classList.contains("hidden")) {
        message1.classList.remove("hidden");
        button.textContent = "Click again!";
    } else {
        let message2 = document.createElement("p");
        message2.textContent = "Nếu đồng ý gửi :v .Nếu không thì gửi :vvv và cảm ơn mày dã giành thời gian reply tin nhắn của tao cũng như xin lỗi đã làm phiền mày thời gian qua :))).";
        message2.classList.add("loveMessage");
        document.querySelector(".container").appendChild(message2);
        button.disabled = true; // Vô hiệu hóa nút sau khi hiển thị thông điệp thứ hai
    }
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
