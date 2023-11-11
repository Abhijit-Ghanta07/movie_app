import {
  bannerSlider as images,
  featuredSlider as featuredImages,
} from "./data.js";
// hero banner
const bannerSlider = document.querySelector(".banner-slider");
const sliderLength = bannerSlider.getElementsByClassName("slider-item");

// recently
const recentSlider = document.querySelector(".recent-slider");
const recentSliderItem = recentSlider.getElementsByClassName("slider-item");
const recentBtn = document.querySelector(".recent-btn");

// featured
const featuredSlider = document.querySelector(".featured-slider");
const featuredBtn = document.querySelector(".featured-btn");
let slideIndex = 0,
  recentIndex = 0,
  featuredIndex = 0;
function mapBanners(arr) {
  let bannerHtml = arr
    .map((item) => {
      return `<div class="slider-item">
                  <img
                    src=${item.imgUrl}
                    alt=""
                  />
                  <p class="movies-dsc">
                   ${item.title}
                  </p>
                  <button class="play-btn">Play Now</button>
                </div>`;
    })
    .join(" ");
  bannerSlider.innerHTML = bannerHtml;
}
function mapRecent(arr) {
  let bannerHtml = arr
    .map((item) => {
      return `<div class="slider-item">
                  <img
                    src=${item.imgUrl}
                    alt=""
                  />
                  <p class="movies-dsc">
                   ${item.title}
                  </p>
                  <button class="play-btn">Play Now</button>
                </div>`;
    })
    .join(" ");
  recentSlider.innerHTML = bannerHtml;
}
function mapFeatured(arr) {
  let bannerHtml = arr
    .map((item) => {
      return `<div class="slider-item">
                  <img
                    src=${item.imgUrl}
                    alt=""
                  />
                  <p class="movies-dsc">
                   ${item.title}
                  </p>
                  <button class="play-btn">Play Now</button>
                </div>`;
    })
    .join(" ");
  featuredSlider.innerHTML = bannerHtml;
}
mapFeatured(featuredImages);
mapRecent(featuredImages);
mapBanners(images);

function sliderBanner() {
  console.log("sliding", sliderLength.length);
  if (slideIndex >= sliderLength.length) {
    bannerSlider.style.transform = `translateX(0)`;
    slideIndex = 0;
  } else {
    bannerSlider.style.transform = `translateX(-${100 * slideIndex}%)`;
    slideIndex++;
  }
}

setInterval(sliderBanner, 3000);

recentBtn.addEventListener("click", slide);
featuredBtn.addEventListener("click", featuredBtnSlide);
function featuredBtnSlide() {
  let imgWidth = recentSliderItem[0].querySelector("img").width;

  let recentLength = recentIndex * imgWidth;
  if (recentLength < window.innerWidth / 2) {
    recentIndex++;
    featuredSlider.style.transform = `translateX(-${
      imgWidth * recentIndex + 50
    }px)`;
  } else {
    featuredSlider.style.transform = `translateX(-${0}px)`;
    recentIndex = 0;
  }
}
function slide() {
  let imgWidth = recentSliderItem[0].querySelector("img").width;

  let recentLength = recentIndex * imgWidth;
  if (recentLength < window.innerWidth / 2) {
    recentIndex++;
    recentSlider.style.transform = `translateX(-${
      imgWidth * recentIndex + 50
    }px)`;
  } else {
    recentSlider.style.transform = `translateX(-${0}px)`;
    recentIndex = 0;
  }
}
