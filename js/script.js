const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = document.querySelectorAll(".letter");

    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; i++) {
        square[i].classList.remove("goback");
        square[i].classList.add("letter-anim");
      }
      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; i++) {
      square[i].classList.remove("letter-anim");
      square[i].classList.add("goback");
    }
  });
});

observer.observe(document.querySelector(".text p"));
