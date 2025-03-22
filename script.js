const baseUrl = 'images/';
const imageCount = 2006;

function showRandomImage() {
  const random = Math.floor(Math.random() * imageCount) + 1;
  const imageUrl = `${baseUrl}${random}.jpg`;
  document.getElementById('randomImage').src = imageUrl;
}

showRandomImage();

function refreshPage() {
  location.reload();
}
