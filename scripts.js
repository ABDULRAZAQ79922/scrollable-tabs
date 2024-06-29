document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.getElementById('tabs');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
  
    let scrollAmount = 0;
  
    leftArrow.addEventListener('click', () => {
      if (scrollAmount > 0) {
        scrollAmount -= 100;
        tabs.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });
  
    rightArrow.addEventListener('click', () => {
      if (scrollAmount < tabs.scrollWidth - tabs.clientWidth) {
        scrollAmount += 100;
        tabs.style.transform = `translateX(-${scrollAmount}px)`;
      }
    });
  });
  