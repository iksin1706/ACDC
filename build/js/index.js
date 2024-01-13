
const animateLight = () => {
  document.querySelector('#about').classList.add("animated");
  document.querySelector('.light-gradient').classList.add('animated');
  document.querySelector('.light-gradient').classList.add('instant');
  document.querySelector('#about').classList.add('instant');
  document.querySelector('.composition').classList.add('animated');
  document.querySelectorAll('.composition__photo').forEach((element)=>{
    element.classList.add('instant');
  })
}

if(window.scrollY>700) {
  animateLight();
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
  
  header.offsetWidth;

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

const targets = document.querySelectorAll(".animation-trigger")

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

const stats = [150, 8, 100]


var elements = document.querySelectorAll('.stat');

elements.forEach((el, index) => {
  const od = new Odometer({
    el: el,
    value: 0,
    format: '',
    theme: 'minimal'
  });

  od.update(stats[index]);
})

const toggleButton = document.querySelector('[data-collapse-toggle="mobile-menu-2"]');

const mobileMenu = document.getElementById('mobile-menu-2');

toggleButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('hidden');
  const expanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
  toggleButton.setAttribute('aria-expanded', expanded);
});

window.addEventListener("load", async () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("preloader--hidden");
  await new Promise(resolve => setTimeout(resolve, 1000)).then(() => { preloader.style.display = 'none' });
  preloader.style.display = "none";
});

document.querySelector('#contact-button').addEventListener('click',() => {
  animateLight();
})