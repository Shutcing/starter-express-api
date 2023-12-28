$(".mail").hide();
$(".content__button").click(() => {
  $(".mail").slideToggle(1000);
});

$(".close").click(() => {
  $(".mail").slideToggle(1000);
});

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const PARTICLES = Array.from(document.querySelectorAll(".particle"));
PARTICLES.forEach((P) => {
  P.style.setProperty("--x", `${RANDOM(20, 80)}`);
  P.style.setProperty("--y", `${RANDOM(20, 80)}`);
  P.style.setProperty("--duration", `${RANDOM(6, 20)}`);
  P.style.setProperty("--delay", `${RANDOM(1, 10)}`);
  P.style.setProperty("--alpha", `${RANDOM(40, 90) / 100}`);
  P.style.setProperty(
    "--origin-x",
    `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`
  );
  P.style.setProperty(
    "--origin-y",
    `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`
  );
  P.style.setProperty("--size", `${RANDOM(40, 90) / 100}`);
});

$(".content__button").hover(() => {
  $(".content__button").addClass("button-hov");
});
