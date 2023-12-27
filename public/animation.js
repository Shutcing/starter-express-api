const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
if (screenWidth / screenHeight >= 1) {
  canvas.height = window.screen.height;
} else {
  canvas.height = window.screen.height / 1.8;
}

const images = [];

class ImageObj {
  constructor(src, x, y, width, height, dx, dy) {
    this.src = src;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = dx;
    this.dy = dy;
    this.image = new Image();
    this.image.src = this.src;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.width > canvas.width / 1.5 || this.x < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.height > canvas.height || this.y < canvas.height / 7) {
      this.dy = -this.dy;
    }
  }
}

function connectImages(image1, image2) {
  ctx.beginPath();
  ctx.moveTo(image1.x + image1.width / 2, image1.y + image1.height / 2);
  ctx.lineTo(image2.x + image2.width / 2, image2.y + image2.height / 2);
  ctx.strokeStyle = "rgba(244, 241, 174, 0.1)";
  ctx.lineWidth = screenWidth * 0.005; // Установите желаемую толщину линии

  ctx.stroke();
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  images.forEach((image) => {
    image.draw();
    image.update();
  });

  for (let i = 0; i < images.length; i++) {
    for (let j = i + 1; j < images.length; j++) {
      const distance = Math.sqrt(
        Math.pow(images[i].x - images[j].x, 2) +
          Math.pow(images[i].y - images[j].y, 2)
      );

      if (
        "[0, 1], [0, 3], [1, 2], [1, 4], [1, 5], [2, 6]".includes(
          `[${i}, ${j}]`
        ) ||
        "[0, 1], [0, 3], [1, 2], [1, 4], [1, 5], [2, 6]".includes(
          `[${j}, ${i}]`
        )
      ) {
        connectImages(images[i], images[j]);
      }
    }
  }
}

function init() {
  const imageUrl = "img/Group 2.png"; // Замените на URL вашего изображения
  var sizes = [
    screenWidth * 0.1666,
    screenWidth * 0.125,
    screenWidth * 0.0833,
    screenWidth * 0.05,
    screenWidth * 0.0833,
    screenWidth * 0.058333,
    screenWidth * 0.05,
  ];
  var ind = 0;
  for (let i = 0; i < 7; i++) {
    const width = sizes[ind];
    ind++;
    const height = width;
    const x = Math.random() * (canvas.width / 1.7 - width) + ind * 5;
    const y =
      Math.random() * (canvas.height - height) * 0.5 +
      canvas.height / 2.5 +
      ind * 5;
    const dx = Math.random() + 0.4;
    const dy = Math.random() + 0.4;

    images.push(new ImageObj(imageUrl, x, y, width, height, dx, dy));
  }

  animate();
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  images.length = 0;
  init();
});

init();
