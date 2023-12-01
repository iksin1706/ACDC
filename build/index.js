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
  {first:"Instalacje",second:"elektryczne"},
  {first:"Instalacje",second:"Odgromowe"},
  {first:"Monitoring",second:"CCTV"},
  {first:"Instalacje",second:"SAT"},
]

const swiper = document.querySelector('.mySwiper');
const heroSwiper = new Swiper(swiper, {
  direction: 'horizontal',
  speed: '1000',
  loop: 'true',
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
    changeText(sliderLabels[heroSwiper.realIndex].first,sliderLabels[heroSwiper.realIndex].second)
});

const changeText = (first, second) => {
    const t1 = document.querySelector(".hero-header__first");
    const t2 = document.querySelector(".hero-header__second");

    const header = document.querySelector(".hero-header");
    
    t1.innerHTML = first;
    t2.innerHTML = second;

    header.classList.add("animate");
    setTimeout(() => { header.classList.remove("animate"); }, 4500);
}

var serviceSwiper = new Swiper(".service-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  //centeredSlides: true,
  //freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
    1284: {
      slidesPerView: 4.5,
      spaceBetween: 50,
    },
  },
});