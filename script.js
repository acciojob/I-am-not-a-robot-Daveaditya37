//your code here
document.addEventListener('DOMContentLoaded', function () {
  const imageContainer = document.getElementById('image-container');
  const resetButton = document.getElementById('reset');
  const verifyButton = document.getElementById('verify');
  const message = document.getElementById('para');
  const h3Message = document.getElementById('h');
  
  let selectedImages = [];
  let images = [
    { id: 1, class: 'img1' },
    { id: 2, class: 'img2' },
    { id: 3, class: 'img3' },
    { id: 4, class: 'img4' },
    { id: 5, class: 'img5' }
  ];

  // Randomly select one image to duplicate
  const randomIndex = Math.floor(Math.random() * images.length);
  images.push({ id: images[randomIndex].id, class: images[randomIndex].class });

  // Shuffle the images array
  images = images.sort(() => Math.random() - 0.5);

  // Render images
  images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.classList.add(image.class);
    imgElement.setAttribute('data-id', image.id); // to identify the image
    imgElement.addEventListener('click',
