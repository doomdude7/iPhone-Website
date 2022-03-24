//pin the first page
const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
//Highlights on page2
const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    // markers: { startColor: "white", endColor: "white" },
    scrub: true,
    start: "-70%",
    end: "50%",
    // start: "-20%",
    // end: "70%",
  },
});
tlH.fromTo(
  ".highlight",
  { color: "rgba(255,255,255,0)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});
tlHRemove.to(".highlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

//page 3
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "-100%",
    end: "10%",
    scrub: true,
  },
});

tlSplit.fromTo(".large-phone", { x: "40%" }, { x: "12%" });
tlSplit.fromTo(".small-phone", { x: "-40%" }, { x: "-12%" }, "<");
tlSplit.fromTo(
  ".product-text-left",
  { x: 50, opacity: 0 },
  { opacity: 1, x: -50 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: -50, opacity: 0 },
  { opacity: 1, x: 50 },
  "<"
);
const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    pin: true,
    pinSpacing: false,
    start: "10%",
    end: "100%",
  },
});

//Carousel
const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let topIndex = 2;

swatches.forEach((swatch, index) => {
  const coord = slides[index].getBoundingClientRect().left;
  swatch.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    let closeUp = document.querySelector("." + swatchName);

    if (currentSwatch === swatchName) return;

    gsap.set(closeUp, { zIndex: topIndex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

    //gallery
    gsap.to(gallery, { x: -coord, duration: 1, ease: "Power2.easeOut" });

    topIndex++;
    currentSwatch = swatchName;
  });
});

//page 5 video on scroll
const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    start: "-10%",
    end: "100%",
    scrub: true,
    pin: true,
  },
});
tlVideo.fromTo(
  ".product-video",
  { currentTime: 0 },
  { currentTime: 3, duration: 1 }
);
tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, stagger: 0.5, duration: 0.5 },
  "<"
);
// sixth page

const tlParallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".sixth-page",
    start: "-30%",
    end: "100%",
    scrub: true,
    pin: true,
  },
});

tlParallax.fromTo(".photo-description", { y: 0, x: 0 }, { y: 350, x: 100 });
// tlParallax.fromTo(
//   ".portrait-container",
//   { y: 100, x: 0 },
//   { y: -200, x: 50 },
//   "<"
// );
tlParallax.fromTo(
  ".portrait-container",
  { y: 0, x: -500 },
  { y: -80, x: -400 },
  "<"
);
tlParallax.fromTo(".phone-video", { y: 0, x: 0 }, { y: -200, x: 100 }, "<");
