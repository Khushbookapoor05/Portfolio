  const text = "Hi, I'm Khushboo";
  let index = 0;
  
  function typeEffect() {
    const contentTitle = document.querySelector(".content h4");
    if (index < text.length) {
        contentTitle.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  window.onload = typeEffect;
  