const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeImageTexts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
}

/* Looping through images */
for (const image of images) {
    const thumbBar = document.querySelector('.thumb-bar');
    const newImageElement = document.createElement('img');
    newImageElement.setAttribute('src', image);
    newImageElement.setAttribute('alt', alternativeImageTexts[image]);
    thumbBar.appendChild(newImageElement);

    newImageElement.addEventListener('click', event => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;

    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  