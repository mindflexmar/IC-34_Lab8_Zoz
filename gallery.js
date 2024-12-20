const images = [
  {
    preview: './images/photo_9_2024-12-20_10-37-48.jpg',
    original: './images/photo_9_2024-12-20_10-37-48.jpg',
    description: 'Зимова доріжка',
  },
  {
    preview: './images/photo_7_2024-12-20_10-37-48.jpg',
    original: './images/photo_7_2024-12-20_10-37-48.jpg',
    description: 'Ліхтар під снігом',
  },
  {
    preview: './images/photo_5_2024-12-20_10-37-48.jpg',
    original: './images/photo_5_2024-12-20_10-37-48.jpg',
    description: 'Янгол в зимовому саду',
  },
  {
    preview: './images/photo_8_2024-12-20_10-37-48.jpg',
    original: './images/photo_8_2024-12-20_10-37-00.jpg',
    description: 'Зимовий павільйон',
  },
  {
    preview: './images/photo_6_2024-12-20_10-37-48.jpg',
    original: './images/photo_6_2024-12-20_10-37-48.jpg',
    description: 'Олені на снігу',
  },
  {
    preview: './images/photo_1_2024-12-20_10-37-48.jpg',
    original: './images/photo_1_2024-12-20_10-37-48.jpg',
    description: 'Снігова вулиця',
  },
  {
    preview: './images/photo_2_2024-12-20_10-37-48.jpg',
    original: './images/photo_2_2024-12-20_10-37-48.jpg',
    description: 'Лісова дорога',
  },
  {
    preview: './images/photo_4_2024-12-20_10-37-48.jpg',
    original: './images/photo_4_2024-12-20_10-37-48.jpg',
    description: 'Рожеві троянди під снігом',
  },
  {
    preview: './images/photo_3_2024-12-20_10-37-48.jpg',
    original: './images/photo_3_2024-12-20_10-37-48.jpg',
    description: 'Цвинтар взимку',
  },
];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
         <a href="${original}" class="gallery-link">
           <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
       </li>`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// Делегування подій
galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
  const isImage = event.target.classList.contains('gallery-image');
  if (!isImage) return;

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageUrl}" alt="${event.target.alt}">
  `);

  instance.show();
});