<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="realisations.css">

    <link rel="stylesheet" href="swiper-bundle.min.css" />
    <link rel="stylesheet" href="minimal.css">
    <style>

    </style>
</head>

<body class="light-gradient-back min-h-screen">
    <div
        class="preloader fixed w-screen h-screen left-0 right-0 flex justify-center items-center bg-slate-900 z-50 flex-col">
        <svg class="scale-75 md:transform-none" xmlns="http://www.w3.org/2000/svg" width="278" height="277"
            viewBox="0 0 278 277" fill="none">
            <circle cx="138.667" cy="137.457" r="73.056" transform="rotate(-0.59901 138.667 137.457)" stroke="#f97316"
                stroke-width="3" />
            <circle cx="157.078" cy="89.5291" r="8.855" transform="rotate(-0.59901 157.078 89.5291)" stroke="#f97316"
                stroke-width="3" />
            <path d="M70.3086 163.105L150.069 94.7853" stroke="#f97316" stroke-width="3" />
            <circle cx="121.235" cy="177.794" r="8.855" transform="rotate(178.295 121.235 177.794)" stroke="#f97316"
                stroke-width="3" />
            <line x1="204.665" y1="104.019" x2="127.974" y2="172.604" stroke="#f97316" stroke-width="3" />
            <circle cx="98.7189" cy="107.484" r="8.855" transform="rotate(179.116 98.7189 107.484)" stroke="#f97316"
                stroke-width="3" />
            <path d="M148.51 65.0035L105.613 101.791" stroke="#f97316" stroke-width="3" />
            <circle cx="169.393" cy="168.865" r="8.855" transform="rotate(0.0656992 169.393 168.865)" stroke="#f97316"
                stroke-width="3" />
            <path
                d="M122.655 207.067C122.026 207.606 121.954 208.553 122.493 209.182C123.033 209.811 123.98 209.883 124.609 209.344L122.655 207.067ZM124.609 209.344L163.917 175.618L161.963 173.341L122.655 207.067L124.609 209.344Z"
                fill="#f97316" />
            <circle cx="136.611" cy="135.366" r="8.855" transform="rotate(179.116 136.611 135.366)" stroke="#f97316"
                stroke-width="3" />
            <line x1="188.767" y1="87.7723" x2="142.902" y2="130.513" stroke="#f97316" stroke-width="3" />
            <path d="M128.758 141.751L82.7921 182.917" stroke="#f97316" stroke-width="3" />
            <path class="animate-spin origin-center"
                d="M223.156 136.625C223.653 184.124 186.229 222.979 139.623 223.466C93.0173 223.954 54.7888 185.889 54.2922 138.39C53.7956 90.8914 91.2199 52.0358 137.826 51.5485C184.431 51.0612 222.66 89.1259 223.156 136.625Z"
                stroke="url(#paint0_linear_258_56)" stroke-width="3" />
            <path class="animate-spin origin-center "
                d="M75.0644 210.151C34.7585 174.387 30.5999 113.325 65.6974 73.7708C100.795 34.2163 161.917 31.08 202.223 66.8442C242.529 102.608 246.688 163.67 211.59 203.224C176.493 242.779 115.37 245.915 75.0644 210.151Z"
                stroke="url(#paint1_linear_258_56)" stroke-width="3" />
            <defs>
                <linearGradient id="paint0_linear_258_56" x1="105.91" y1="219.172" x2="192.919" y2="101.376"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f97316" />
                    <stop offset="1" stop-color="#f97316" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_258_56" x1="95.0781" y1="48.8841" x2="127.756" y2="211.432"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#f97316" />
                    <stop offset="1" stop-color="#f97316" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
        <div><span class="text-orange-500 text-3xl md:text-7xl -mt-10">AC.DC</span></div>
        <div><span class="text-xl md:text-3xl text-white tracking-widest font-thin">Adrian Jasiński</span></div>
    </div>

    <header class="absolute z-40 w-full bg-slate-900">
        <nav class=" border-gray-200 lg:px-32 py-5 bg-gradient-to-l">
            <div class="flex flex-wrap justify-between items-center">
                <a href="." class="flex items-center ml-4 md:ml-0">
                    <img src="img/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap text-white">AC DC</span>
                </a>
                <div class="flex items-center lg:order-2">
                    <a href="#contact"
                        class="text-white bg-orange-500 text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">Kontakt</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="true">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 bg-slate-900"
                    id="mobile-menu-2">
                    <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#about"
                                class="block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-200 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">O
                                nas
                            </a>
                        </li>
                        <li>
                            <a href="#services"
                                class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-200 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">Nasze
                                usługi</a>
                        </li>
                        <li>
                            <a href="realisations.html"
                                class="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 text-gray-200 lg:hover:text-white hover:bg-gray-700 hover:text-white lg:hover:bg-transparent border-gray-700">Realizacje
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section class="lg:pt-40 sm:pt-40 md:pt-40 pt-40">
            <h2
                class="text-gray-700 text-4xl relative after:absolute after:w-20 after:h-1 after:left-0 after:-bottom-2 after:bg-orange-500 mb-10 mx-4 lg:mx-32 md:mx-10 sm:mx-4">
                Realizacje
            </h2>
            <?php
            $realisationsDir = 'img/realisations';
            $categories = array_diff(glob($realisationsDir . '/*', GLOB_ONLYDIR), ['.', '..']);

            ?>
            <div
                class="swiper categories lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
                <div class="swiper-wrapper p-10 pl-0">
                    <?php foreach ($categories as $index => $category): ?>
                        <div class="swiper-slide">
                            <div class="neu-shadow rounded-2xl p-8 text-center flex flex-col justify-center h-8 category <?= $index === 0 ? 'selected' : '' ?>"
                                option="<?= htmlspecialchars(basename($category)) ?>" index="<?= $index ?>">

                                <?php
                                $nameFile = $category . '/name.txt';
                                if (file_exists($nameFile)) {
                                    $nameContent = file_get_contents($nameFile);
                                    ?>
                                    <h3 class="lg:text-large text-base pointer-events-none">
                                        <?= htmlspecialchars(basename($nameContent)) ?>
                                    </h3>
                                    <?php
                                }
                                ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <?php
            function generateCategoryHTML($categoryDir, $isActive = false)
            {
                $categoryName = basename($categoryDir);
                $categoryImages = glob($categoryDir . '/thumb/*.jpg');

                $activeClass = $isActive ? ' active' : '';

                echo '<div class="' . $categoryName . '-wrapper category-wrapper' . $activeClass . '">';
                echo '<div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>a:not(:first-child)]:mt-8" name="' . $categoryName . '">';

                foreach ($categoryImages as $index => $image) {
                    echo '<a href="#' . $categoryName . '" slideIndex="' . $index . '" lightBoxIndex="0" class="photo mt-2 block">';
                    echo '<img class="h-auto max-w-full rounded-lg" src="' . $image . '" alt="" loading="lazy">';
                    echo '</a>';
                }

                echo '</div>';
                echo '</div>';
            }

            $categories = array_filter(glob($realisationsDir . '/*'), 'is_dir');

            echo '<div class="p-4 lg:px-32 md:px-10 spx-4 pt-5">';
            $isFirst = true;
            foreach ($categories as $category) {
                generateCategoryHTML($category, $isFirst);
                $isFirst = false;
            }
            echo '</div>';
            ?>
        </section>
    </main>
    <?php
    $lightboxDirectories = glob('img/realisations/*', GLOB_ONLYDIR);

    foreach ($lightboxDirectories as $directory) {
        $directoryName = basename($directory);
        $images = glob("$directory/*.jpg");

        ?>
        <div href="#" id="<?= $directoryName ?>"
            class="light-box target:block hidden fixed h-screen w-screen z-50 bg-opacity-80 bg-black left-0 top-0"
            lightBoxIndex="0">
            <div class="w-11/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                <div class="swiper light-box-swiper"
                    style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" name="<?= $directoryName ?>">
                    <div class="swiper-wrapper">
                        <?php
                        foreach ($images as $index => $imagePath) {
                            ?>
                            <div class="swiper-slide">
                                <img src="<?= $imagePath ?>" alt="" loading="lazy">
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                    <div class="light-box-swiper-button-next swiper-button-next"></div>
                    <div class="light-box-swiper-button-prev swiper-button-prev"></div>
                    <div class="light-box-swiper-pagination"></div>
                </div>
            </div>
            <a class="fixed right-5 top-3 text-white text-5xl close">&#10006</a>
        </div>
        <?php
    }
    ?>
   <footer class="bg-slate-950 md:px-32 px-4 ">
        <div class="flex justify-start items-start py-10 md:flex-row flex-col">
            <div class="flex flex-col">
                <div class="flex items-center">
                    <svg class="scale-75 md:transform-none" xmlns="http://www.w3.org/2000/svg" width="80" height="80"
                        viewBox="0 0 278 277" fill="none">
                        <circle cx="138.667" cy="137.457" r="73.056" transform="rotate(-0.59901 138.667 137.457)"
                            stroke="#f97316" stroke-width="3" />
                        <circle cx="157.078" cy="89.5291" r="8.855" transform="rotate(-0.59901 157.078 89.5291)"
                            stroke="#f97316" stroke-width="3" />
                        <path d="M70.3086 163.105L150.069 94.7853" stroke="#f97316" stroke-width="3" />
                        <circle cx="121.235" cy="177.794" r="8.855" transform="rotate(178.295 121.235 177.794)"
                            stroke="#f97316" stroke-width="3" />
                        <line x1="204.665" y1="104.019" x2="127.974" y2="172.604" stroke="#f97316" stroke-width="3" />
                        <circle cx="98.7189" cy="107.484" r="8.855" transform="rotate(179.116 98.7189 107.484)"
                            stroke="#f97316" stroke-width="3" />
                        <path d="M148.51 65.0035L105.613 101.791" stroke="#f97316" stroke-width="3" />
                        <circle cx="169.393" cy="168.865" r="8.855" transform="rotate(0.0656992 169.393 168.865)"
                            stroke="#f97316" stroke-width="3" />
                        <path
                            d="M122.655 207.067C122.026 207.606 121.954 208.553 122.493 209.182C123.033 209.811 123.98 209.883 124.609 209.344L122.655 207.067ZM124.609 209.344L163.917 175.618L161.963 173.341L122.655 207.067L124.609 209.344Z"
                            fill="#f97316" />
                        <circle cx="136.611" cy="135.366" r="8.855" transform="rotate(179.116 136.611 135.366)"
                            stroke="#f97316" stroke-width="3" />
                        <line x1="188.767" y1="87.7723" x2="142.902" y2="130.513" stroke="#f97316" stroke-width="3" />
                        <path d="M128.758 141.751L82.7921 182.917" stroke="#f97316" stroke-width="3" />
                    </svg>
                    <span class="text-orange-500 text-xl"> AC.DC</span>
                </div>
                <p class="text-white">Adrian Jasiński</p>
                <ul class="text-white">
                    <li>Ustrobna 302, 38-406 Odrzykoń</li>
                    <li>Krosno, województwo podkarpackie</li>
                    <li>Telefon kontaktowy: <a href="tel:+48725454857" class="link" aria-label="Zadzwoń">+48 123 123
                            123</a></li>
                    <li>Adres email: <a href="mailto:adrian.jasi@interia.eu" class="link"
                            aria-label="Wyslij email">adrian.jasi@interia.eu</a>
                    </li>
                </ul>
            </div>
            <div class="md:ml-20  h-full mt-20">
                <ul class="text-white flex flex-col justify-between">
                    <li class="font-bold">Menu</li>
                    <li><a href="#about" class="link">O nas</a></li>
                    <li><a href="#services" class="link">Nasze usługi</a></li>
                    <li><a href="#contact" class="link">Kontakt</a></li>
                </ul>
            </div>
            <div class="md:ml-20  h-full mt-20">
                <ul class="text-white flex flex-col justify-between">
                    <li class="font-bold">Podstrony</li>
                    <li><a href="#realisations.html" class="link">Nasze realizacje</a></li>
                    <li><a href="#" class="link">Polityka prywatnosci</a></li>
                </ul>
            </div>
        </div>
        <div>
            <p class="text-white text-center py-10 border-t-2 border-gray-400">©Copyright wszelkie prawa zastrzeżone |
                Projekt i realizacja > <a href="https://iksin1706.github.io/portfolio/" class="link">Łukasz Jasiński</a>
            </p>
        </div>
    </footer>

    <script type="module" src="swiper-bundle.min.js"></script>
    <script type="module" src="js/realisations.js"></script>
</body>