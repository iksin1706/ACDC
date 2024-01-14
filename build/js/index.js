
const targets = document.querySelectorAll(".animation-trigger")
const about = document.querySelector('#about');
const lightGradient = document.querySelector('.light-gradient');
const composition = document.querySelector('.composition');
const compositionsPhotos = document.querySelectorAll('.composition__photo');
const statsElements = document.querySelectorAll('.stat');
const swiper = document.querySelector('.mySwiper');
const contactButton = document.querySelector('#contact-button');

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

const sliderLabels = [
  { first: "Instalacje", second: "elektryczne" },
  { first: "Pomiary", second: "i dozór" },
  { first: "Monitoring", second: "CCTV" },
  { first: "Instalacje", second: "SAT" },
  { first: "Systemy", second: "Alarmowe" },
  { first: "Instalacje", second: "Odgromowe" },
]

const stats = [228, 8, 100]

const serviceSwiper = new Swiper(".service-swiper", {
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
    1150: {
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

const checkForHash = () => {
  let url = window.location.href;

  if (url.includes("#")) {
    animateLight();
  } else {
  }
}

const changeText = (first, second) => {
  const t1 = document.querySelector(".hero-header__first");
  const t2 = document.querySelector(".hero-header__second");

  const header = document.querySelector(".hero-header");

  t1.innerHTML = first;
  t2.innerHTML = second;

  header.classList.remove("animate");

  header.offsetWidth;

  requestAnimationFrame(() => {
    header.classList.add("animate");
  });
}

const animateLight = () => {
  about.classList.add("animated", 'instant');
  lightGradient.classList.add('animated', 'instant');
  composition.classList.add('animated');
  compositionsPhotos.forEach((element) => {
    element.classList.add('instant');
  })
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      if (entry.target.classList.contains('light-trigger')) {
        document.querySelector('.light-gradient').classList.add('animated');
        document.querySelector('.composition').classList.add('animated');
      }
    }
  });
}, {
  rootMargin: '0px 0px -50% 0px',
  threshold: 0.5
});
targets.forEach((target) => {
  observer.observe(target);
});

window.addEventListener('load',()=>{
  if (window.scrollY > 700) {
    animateLight();
  }
  checkForHash();
})

heroSwiper.on('slideChange', function (e) {
  changeText(sliderLabels[heroSwiper.realIndex].first, sliderLabels[heroSwiper.realIndex].second)
});

statsElements.forEach((el, index) => {
  const od = new Odometer({
    el: el,
    value: 0,
    format: '',
    theme: 'minimal'
  });

  od.update(stats[index]);
})

window.addEventListener("load", async () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader--hidden");
  await new Promise(resolve => setTimeout(resolve, 1000)).then(() => { preloader.style.display = 'none' });
  preloader.style.display = "none";
});

contactButton.addEventListener('click', () => {
  animateLight();
})