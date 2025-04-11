
const UNSPLASH_ACCESS_KEY = "dMZODxE4NxKGL3mgXOTyPRl2Eeob6xA7d7IlbYK8Ku8";

const catImage = document.getElementById('catImage');
const button = document.getElementById('showPicture');
const hamsterButton = document.getElementById('showHamster');

async function getImage(query) {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();

    if (!data.urls || !data.urls.regular) {
      throw new Error('No image returned');
    }

    catImage.src = data.urls.regular;
    catImage.alt = `${query} picture`;
    catImage.style.display = 'block';
  } catch (err) {
    console.error('Image error:', err);
    alert('Error loading image');
  }
}

button.addEventListener('click', () => getImage('cat'));
hamsterButton.addEventListener('click', () => getImage('hamster'));
