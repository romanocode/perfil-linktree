
const profileText = document.querySelector('.profile');

const profileContent = document.createElement('h1');
profileContent.textContent = 'Carlos Romano'; 

const description = document.createElement('p');
description.textContent = 'Marketing Digital | Social Media | FrontDev in Training';

profileText.appendChild(profileContent);
profileText.appendChild(description);


const buttons = document.querySelectorAll('.links .button');


const newTexts = ['Mi Portafolio', 'Aprende a programar', 'Contacto'];


buttons.forEach((button, index) => {
    if (newTexts[index]) { 
        button.innerHTML = `${newTexts[index]} <i class="fa-solid fa-ellipsis-vertical"></i>`;
    }
});


const aprenderBtn = document.querySelector('.links .button:nth-child(2)'); 

const insertarVideo = () => {
    if (aprenderBtn.querySelector('iframe')) return;

   
    const video = document.createElement('iframe');
    video.width = "100%";  
    video.height = "180px";  
    video.src = "https://www.youtube.com/embed/-Uqy5MXH3kM?si=ZZOc7sNK7uS7XMkS";
    video.frameBorder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;

    
    aprenderBtn.innerHTML = "";
    aprenderBtn.style.height = "auto"; 
    aprenderBtn.style.padding = "0"; 
    aprenderBtn.appendChild(video);
};


aprenderBtn.addEventListener('click', insertarVideo);

document.addEventListener("DOMContentLoaded", function () {
    particlesJS("particles-js", {
        "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 1,
        "color": "#0411e8"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 121.80465781011475,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
    });
});
