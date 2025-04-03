
const profileText = document.querySelector('.profile');

const profileContent = document.createElement('h1');
profileContent.textContent = 'Carlos Romano'; 

const description = document.createElement('p');
description.textContent = 'Marketing Digital | Social Media | FrontDev in Training|';

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