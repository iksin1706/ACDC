window.addEventListener("load", async () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader--hidden");
    await new Promise(resolve => setTimeout(resolve, 1000)).then(() => { preloader.style.display = 'none' });
    preloader.style.display = "none"; // Hide the preloader
  });

const menuContainer = document.querySelector(".categories");

const swiper = document.querySelector('.categories');
var categorySwiper = new Swiper(swiper, {
    slidesPerView: 2,
    spaceBetween: 20,
    slidesOffsetAfter: 100,
    slidesOffsetBefore: 50,
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
    
  let optionWrapper = undefined;
menuContainer.addEventListener("click", function (event) {
    console.log("1");
    if (event.target.classList.contains("category")) {

        categorySwiper.slideTo(parseInt(event.target.getAttribute("index")),1000,true);

        const clickedMenuItem = event.target;

        const menuItems = menuContainer.querySelectorAll(".category");
        menuItems.forEach(function (menuItem) {
            menuItem.classList.remove("selected");
        });
        clickedMenuItem.classList.add("selected");
        const option = clickedMenuItem.getAttribute("option");


        const activeElements = document.querySelectorAll(".active");
        activeElements.forEach(function (element) {
            element.classList.remove("active");
        });

        optionWrapper = document.querySelector("." + option + "-wrapper");
        if (optionWrapper) {
            optionWrapper.classList.add("active");
        }

        // Logging the clicked menu item
        console.log("2");
    }
});

document.querySelector('.light-box').addEventListener('click',()=>{
    if(event.target.classList.contains("light-box"))history.replaceState("", "", window.location.pathname, window.location.search);
})

function updateSliderFromURL() {
    var slideIndex = parseInt(getParameterByName('slideIndex')) || 0;
    if (lightBoxes.length > 0 && slideIndex >= 0) {
      lightBoxes.forEach((lightbox) => {
        lightbox.slideTo(slideIndex, 0, false);
      });
    }
}

let lightBoxes = {}; // Using an object instead of an array

document.querySelectorAll(".light-box-swiper").forEach((element, index) => {
  let lightBox = new Swiper(element, {
    zoom: true,
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

  const name = element.getAttribute("name"); // Get the ID of the element
  lightBoxes[name] = lightBox; // Add the Swiper instance to the object with element ID as key
  console.log(lightBoxes);

  lightBox.on('slideChange', function () {
    var currentURL = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);
    const slideIndex = lightBox.realIndex;
    urlParams.set('slideIndex', slideIndex);
  
    // Reconstruct the URL with updated slideIndex parameter
    const updatedParams = urlParams.toString();
    const newURL = currentURL.split('?')[0] + '?' + updatedParams;
  
    // Replace the URL with updated slideIndex
    history.replaceState({}, '', newURL);
  });
});

  document.querySelectorAll(".photo").forEach((element) => {
    element.addEventListener("click", () => {
        updateSliderFromURL();
    });
  });

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener('popstate', handleURLChange);

function handleURLChange() {
    const urlParams = new URLSearchParams(window.location.search);
    const sliderName = urlParams.get('sliderName');
    const slideIndex = parseInt(urlParams.get('slideIndex')) || 0;

    function displaySlider(sliderId, index) {
      const slider = document.getElementById(sliderId);
      if (slider) {
        // Show or activate the slider (you may have your own logic here)
        lightBoxes[sliderName].slideTo(slideIndex,0,false);
        slider.style.display = 'block'; // For example, show the slider if it's hidden
      } else {
        console.error('Slider not found');
      }
      
    }
  
    // Call the function with parameters from URL
    if (sliderName !== null && slideIndex !== null && !isNaN(slideIndex)) {
      displaySlider(sliderName, slideIndex);
    } else {
        document.querySelectorAll('.light-box').forEach((element)=>{
            element.style.display='none';
        })
    }
  }

document.addEventListener("DOMContentLoaded", function () {
    handleURLChange();
  });

  const photoElements = document.querySelectorAll('.photo');

  function handleClick(event) {
      event.preventDefault();

      const queryString = event.currentTarget.getAttribute('href');
      const urlParams = new URLSearchParams(queryString);

      const sliderName = urlParams.get('sliderName');
      const slideIndex = urlParams.get('slideIndex');

      // Handle your logic based on sliderName and slideIndex
      console.log('Slider Name:', sliderName);
      console.log('Slide Index:', slideIndex);

      // Your slider update logic here...

      const newURL = window.location.pathname + queryString;
      history.pushState({}, '', newURL);
      handleURLChange();
  }

  // Add click event listener to all elements with the "photo" class
  photoElements.forEach(function (element) {
      element.addEventListener('click', handleClick);
      const parentName = element.parentNode.getAttribute('name');
      const index = Array.from(element.parentNode.children).indexOf(element);

      const queryString = `sliderName=${parentName}&slideIndex=${index}`;

      // Update the href attribute of each .photo element
      element.setAttribute('href', '?' + queryString);
  });

  document.querySelectorAll('.close').forEach((element)=>{
    element.addEventListener('click',()=>{
        clearSearchParams();
    })
  })

  function clearSearchParams() {
    const url = new URL(window.location.href);
    url.search = '';
  
    // Use history.pushState() or history.replaceState() to update the URL without search parameters
    history.pushState({}, '', url.toString()); // Use pushState to add a new history entry
    handleURLChange();
  }
  