const IMAGES = document.querySelectorAll("img");

for (let i = 0; i<IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  console.log(imgSrc);
}
