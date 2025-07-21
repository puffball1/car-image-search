async function searchCar() {
  const query = document.getElementById('searchInput').value;
  const imageContainer = document.getElementById('imageResults');
  imageContainer.innerHTML = '';

  const apiKey = '51424372-6715adee8b822fb09707a802d'; // Pixabay test API key
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=9`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.hits.length === 0) {
      imageContainer.innerHTML = '<p>No images found. Try a different car name.</p>';
      return;
    }

    data.hits.forEach(hit => {
      const img = document.createElement('img');
      img.src = hit.webformatURL;
      imageContainer.appendChild(img);
    });
  } catch (error) {
    imageContainer.innerHTML = '<p>Error loading images. Please check the console.</p>';
    console.error(error);
  }
}
