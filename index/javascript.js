document.addEventListener("DOMContentLoaded", function() {
    const diapositivas = document.querySelector(".diapositivas");
    const sig = document.querySelector(".sig");
    const ant = document.querySelector(".ant");
    let currentIndex = 0;
  
    sig.addEventListener("click", function() {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      updateSliderPosition();
    });
  
    ant.addEventListener("click", function() {
      currentIndex = currentIndex < diapositivas.children.length - 1 ? currentIndex + 1 : diapositivas.children.length - 1;
      updateSliderPosition();
    });
  
    function updateSliderPosition() {
      const slideWidth = diapositivas.children[0].offsetWidth;
      const newPosition = -currentIndex * slideWidth;
      diapositivas.style.transform = `translateX(${newPosition}px)`;
    }
  });