const bgContainer = document.getElementById("bgContainer");
const giftBox = document.getElementById("giftBox");
const letter = document.getElementById("letter");

const imageLinks = [
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png",
  "https://i.imgur.com/2BNstdM.png"
];

// 10 ảnh bay qua lại
imageLinks.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.style.top = `${Math.random() * 70 + 5}%`;
  img.style.animationDelay = `${i * 0.6}s`;
  bgContainer.appendChild(img);
});

// ảnh rơi liên tục
setInterval(() => {
  const img = document.createElement("img");
  img.src = imageLinks[Math.floor(Math.random() * imageLinks.length)];
  img.classList.add("falling");
  img.style.left = `${Math.random() * 100}%`;
  bgContainer.appendChild(img);
  setTimeout(() => img.remove(), 4000);
}, 600);

// mở thư khi nhấn ảnh trung tâm
giftBox.addEventListener("click", () => {
  giftBox.style.transform = "translate(-50%, -50%) scale(0)";
  setTimeout(() => letter.classList.add("show"), 800);
});