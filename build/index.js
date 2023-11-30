const sliderLabels = [
  {first:"Instalacje",second:"elektryczne"},
  {first:"Instalacje",second:"Odgromowe"},
  {first:"Monitoring",second:"CCTV"},
]

const swiper = document.querySelector('.mySwiper');
const heroSwiper = new Swiper(swiper, {
  direction: 'horizontal',
  speed: '500',
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
    delay: 3000,
  },
});

heroSwiper.on('slideChange', function (e) {
  console.log('Slide changed to: ' + heroSwiper.activeIndex);
});

const changeText = (first, second) => {
    t1 = document.querySelector(".hero-header__first");
    t2 = document.querySelector(".hero-header__second");

    header = document.querySelector(".hero-header");

    t1.innerHTML = first;
    t2.innerHTML = second;

    header.classList.remove("animate");
    setTimeout(() => { header.classList.add("animate"); }, 1);
}