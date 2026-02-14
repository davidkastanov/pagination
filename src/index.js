const API_KEY = "54640967-f174f6139fb35610610a281ef";
const API_URL = "https://pixabay.com/api/";

const galleryElement = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("load-more");
const loadingElement = document.getElementById("loading");

let page = 1;
const perPage = 20;

async function fetchImages() {
  loadingElement.style.display = "block";
  loadMoreBtn.style.display = "none";

  try {
    const url = `${API_URL}?key=${API_KEY}&editors_choice=true&image_type=photo&page=${page}&per_page=${perPage}`;

    const response = await fetch(url);
    const data = await response.json();

    renderImages(data.hits);

    if (data.hits.length < perPage) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-block";
    }

  } catch (error) {
    console.error(error);
  } finally { // << це мені допоміг ШІ
    loadingElement.style.display = "none";
  }
}

function renderImages(images) {
  images.forEach((image) => {
    const li = document.createElement("li");
    li.className = "gallery-item";
    li.innerHTML = `
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-img">
    `;
    galleryElement.appendChild(li);
  });
}

loadMoreBtn.addEventListener("click", () => {
  page++;
  fetchImages();
});

fetchImages();