const IMAGES = document.querySelectorAll("img");
const SIZES = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 670px"
};

function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400;

  // Loop to grab all 5 image sizes and append to imgSrc a specific output
  for (let i = 0; i < 5; i++) {
    markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
    // Adding another 400 pixels onto the image size
    width += 400;
  }
  // Join used to generate comma-separated list
  return markup.join();
}

for (let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute("src");
  // To remove the file endings from the images for later modification
  imgSrc = imgSrc.slice(0, -8);
  let srcset = makeSrcset(imgSrc);
  
  // Places values in srcset
  IMAGES[i].setAttribute("srcset", srcset);

  let type = IMAGES[i].getAttribute("data-type");
  let sizes = SIZES[type];
  // Places correct values in srcset
  IMAGES[i].setAttribute("sizes", sizes);
}
