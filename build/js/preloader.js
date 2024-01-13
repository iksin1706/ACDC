window.addEventListener("load", async () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("preloader--hidden");
    await new Promise(resolve => setTimeout(resolve, 1000)).then(() => { preloader.style.display = 'none' });
    preloader.style.display = "none"; // Hide the preloader
  });