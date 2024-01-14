const swiper = document.querySelector('.categories');
const lightBoxSwipers = document.querySelectorAll(".light-box-swiper");
const lightBoxConteiners = document.querySelectorAll(".light-box");
const photoElements = document.querySelectorAll('.photo');
const closeButtons = document.querySelectorAll('.close');
let lightBoxes = {};

const categorySwiper = new Swiper(swiper, {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesOffsetAfter: 100,
  slidesOffsetBefore: 50,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesOffsetBefore: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
      slidesOffsetBefore: 100,
    },
    1284: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesOffsetBefore: 150,
    },
  },
});

const handleClick = (event) => {
  event.preventDefault();

  const queryString = event.currentTarget.getAttribute('href');
  const urlParams = new URLSearchParams(queryString);

  const sliderName = urlParams.get('sliderName');
  const slideIndex = urlParams.get('slideIndex');

  const newURL = window.location.pathname + queryString;
  history.pushState({}, '', newURL);
  handleURLChange();
}

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const updateSliderFromURL = () => {
  const slideIndex = parseInt(getParameterByName('slideIndex')) || 0;
  if (lightBoxes.length > 0 && slideIndex >= 0) {
    lightBoxes.forEach((lightbox) => {
      lightbox.slideTo(slideIndex, 0, false);
    });
  }
}

const handleURLChange = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sliderName = urlParams.get('sliderName');
  const slideIndex = parseInt(urlParams.get('slideIndex')) || 0;

  function displaySlider(sliderId, index) {
    const slider = document.getElementById(sliderId);
    if (slider) {
      lightBoxes[sliderName].slideTo(slideIndex, 0, false);
      slider.style.display = 'block';
    } else {
      console.error('Slider not found');
    }

  }

  if (sliderName !== null && slideIndex !== null && !isNaN(slideIndex)) {
    displaySlider(sliderName, slideIndex);
  } else {
    lightBoxConteiners.forEach((element) => {
      element.style.display = 'none';
    })
  }
}

lightBoxSwipers.forEach((element, index) => {
  let lightBox = new Swiper(element, {
    zoom: {
      maxRatio: 3,
      minRatio: 1
    },
    lazy: true,
    pagination: {
      el: ".light-box-swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".light-box-swiper-button-next",
      prevEl: ".light-box-swiper-button-prev",
    },
  });

  const name = element.getAttribute("name");
  console.log(lightBoxes);
  lightBoxes[name] = lightBox;


  lightBox.on('slideChange', function () {
    const currentURL = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const slideIndex = lightBox.realIndex;
    urlParams.set('slideIndex', slideIndex);

    const updatedParams = urlParams.toString();
    const newURL = currentURL.split('?')[0] + '?' + updatedParams;

    history.replaceState({}, '', newURL);
  });
});

swiper.addEventListener("click", function (event) {
  if (event.target.classList.contains("category")) {

    categorySwiper.slideTo(parseInt(event.target.getAttribute("index")), 1000, true);

    const clickedMenuItem = event.target;

    const menuItems = swiper.querySelectorAll(".category");
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("selected");
    });
    clickedMenuItem.classList.add("selected");
    const option = clickedMenuItem.getAttribute("option");


    const activeElements = document.querySelectorAll(".active");
    activeElements.forEach(function (element) {
      element.classList.remove("active");
    });

    let optionWrapper = document.querySelector("." + option + "-wrapper");
    if (optionWrapper) {
      optionWrapper.classList.add("active");
    }
  }
});

photoElements.forEach((element) => {
  element.addEventListener("click", () => {
    updateSliderFromURL();
  });
});

window.addEventListener('popstate', handleURLChange);

document.addEventListener("DOMContentLoaded", function () {
  handleURLChange();
});

photoElements.forEach(function (element) {
  element.addEventListener('click', handleClick);
  const parentName = element.parentNode.getAttribute('name');
  const index = Array.from(element.parentNode.children).indexOf(element);

  const queryString = `sliderName=${parentName}&slideIndex=${index}`;

  element.setAttribute('href', '?' + queryString);
});

closeButtons.forEach((element) => {
  element.addEventListener('click', () => {
    clearSearchParams();
  })
})

const clearSearchParams = () => {
  const url = new URL(window.location.href);
  url.search = '';

  history.pushState({}, '', url.toString());
  handleURLChange();
}

