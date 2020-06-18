const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle Nav
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    //Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.50}s`;
      }
    });

    //Burger animation
    burger.classList.toggle('toggle');

    /*
    var attribute = document.getElementById("attribute");
    if (attribute != null) {
      clear(attribute);
    }*/
    var front_text = document.getElementById("front_page_text");
    if (front_text != null) {
      clear(front_text);
    }

  });
}

function clear(x) {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const app = ()=> {
  navSlide();
}

app();
