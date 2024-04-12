let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");

}

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
}
document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
}

window.onscroll = () => {
  if (scrollY > 0) {
    document.querySelector(".header").classList.add("active");

  } else {
    document.querySelector(".header").classList.remove("active");
  }

  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

}


window.onload = () => {
  if (scrollY > 0) {
    document.querySelector(".header").classList.add("active");

  } else {
    document.querySelector(".header").classList.remove("active");
  }
}

let heroBg = document.querySelector('.hero');

setInterval(() => {
  heroBg.style.backgroundImage = "url(img/bg-light.jpg)"

  setTimeout(() => {
    heroBg.style.backgroundImage = "url(img/bg.jpg)"
  }, 1000);
}, 2200);

// swiper js featured section

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    991: {
      slidesPerView: 3,

    },
  },
});

//reviews

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    768: {
      slidesPerView: 2,

    },
    991: {
      slidesPerView: 3,

    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)



// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute ('id');

//         if (top >= offset && top < offset + height){
//             navLinks.forEach (links => {
//                 links.classList.remove ('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             })
//         }
//     })
// }

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  //when the scroll is higher than 350vh add the show scroll class to the a tag with the scroll tag
  if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


// form submission validation

function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("tel").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  var text;
  if (name.length < 3) {
    text = "*please enter valid name*";
    error_message.innerHTML = text;
    return false;
  }

  if (isNaN(phone) || phone.length <= 11) {
    text = "*11 digits phone number required*";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length < 10) {
    text = "message should be more than 10 characters";
    error_message.innerHTML = text;
    return false;
  }
  alert
    ("form submitted successfully");
  return true;
}

document.querySelectorAll(".vehicles img").forEach(image =>{
  image.onclick = () =>{
      document.querySelector(".modal").style.display = "block";
      document.querySelector(".modal img").src = image.getAttribute("src");
  }
});

document.querySelector(".modal .close").onclick = () =>{
  document.querySelector(".modal").style.display = "none";
}

