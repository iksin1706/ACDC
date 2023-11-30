const sliderLabels = [
  {first:"Instalacje",second:"elektryczne"},
  {first:"Instalacje",second:"Odgromowe"},
  {first:"Monitoring",second:"CCTV"},
  {first:"Instalacje",second:"SAT"},
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
    delay: 5000,
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

    header.classList.remove("animate");
    setTimeout(() => { header.classList.add("animate"); }, 10);
}