tailwind.config = {
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
}

const sliderLabels = [
  { first: "Instalacje", second: "elektryczne" },
  { first: "Pomiary", second: "i dozór" },
  { first: "Monitoring", second: "CCTV" },
  { first: "Instalacje", second: "SAT" },
  { first: "Systemy", second: "Alarmowe" },
  { first: "Instalacje", second: "Odgromowe" },
]

const swiper = document.querySelector('.mySwiper');
const heroSwiper = new Swiper(swiper, {
  direction: 'horizontal',
  speed: '1000',
  loop: 'true',
  lazy: 'true',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    enabled: true,
    delay: 3500,
  },
});

heroSwiper.on('slideChange', function (e) {
  changeText(sliderLabels[heroSwiper.realIndex].first, sliderLabels[heroSwiper.realIndex].second)
});

const changeText = (first, second) => {
  const t1 = document.querySelector(".hero-header__first");
  const t2 = document.querySelector(".hero-header__second");

  const header = document.querySelector(".hero-header");

  t1.innerHTML = first;
  t2.innerHTML = second;

  header.classList.remove("animate");
  // Triggering reflow
  header.offsetWidth; // This line forces a reflow, ensuring CSS changes are applied before adding the class

  requestAnimationFrame(() => {
    header.classList.add("animate");
  });
}

var serviceSwiper = new Swiper(".service-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      slidesOffsetBefore: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40,
      slidesOffsetBefore: 20,
    },
    1284: {
      slidesPerView: 4.5,
      spaceBetween: 50,
      slidesOffsetBefore: 100,
      slidesOffsetAfter: 100,
    },
  },
});

const targets = document.querySelectorAll(".animation-trigger")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      if (entry.target.classList.contains('light-trigger')) document.querySelector('.light-gradient').classList.add('animated');
    }
  });
}, {
  rootMargin: '0px 0px -50% 0px',
  threshold: 0.5
});

targets.forEach((target) => {
  observer.observe(target);
});

const stats = [150, 8, 100]

window.odometerOptions = {
  auto: false, // Don't automatically initialize everything with class 'odometer'
  selector: '.my-numbers', // Change the selector used to automatically find things to be animated
  format: '(,ddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
  duration: 3000, // Change how long the javascript expects the CSS animation to take
  theme: 'car', // Specify the theme (if you have more than one theme css file on the page)
  animation: 'count' // Count is a simpler animation method which just increments the value,
  // use it when you're looking for something more subtle.
};

var elements = document.querySelectorAll('.stat');

elements.forEach((el,index) => {
  const od = new Odometer({
    el: el,
    value: 0,
    format: '',
    theme: 'minimal'
  });

  od.update(stats[index]);
})

const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');

// Get the mobile menu container element
const mobileMenu = document.getElementById('mobile-menu-2');

// Add a click event listener to the toggle button
toggleButton.addEventListener('click', function() {
  // Toggle the 'hidden' class on the mobile menu container
  mobileMenu.classList.toggle('hidden');
  const expanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
  toggleButton.setAttribute('aria-expanded', expanded);
});

window.addEventListener("load", async () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader--hidden");
  await new Promise(resolve => setTimeout(resolve, 1000)).then(() => { preloader.style.display = 'none' });
  preloader.style.display = "none"; // Hide the preloader
});