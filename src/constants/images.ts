import { ImageData } from '../interfaces/ImageData';
export const mainProductImage: ImageData = {
  id: '1',
  imgSrc: '/src/assets/gallery-1.svg',
  alt: 'Main Product Image',
};

export const thumbnailImages: ImageData[] = [
  { id: '2', imgSrc: '/src/assets/gallery-2.svg', alt: 'Thumbnail 1' },
  { id: '3', imgSrc: '/src/assets/gallery-3.svg', alt: 'Thumbnail 2' },
  { id: '4', imgSrc: '/src/assets/gallery-4.svg', alt: 'Thumbnail 3' },
];
export const securityProviders: ImageData[] = [
  { id: '44', imgSrc: '/src/assets/icon-1.svg', alt: 'McAfee Secure' },
  { id: '45', imgSrc: '/src/assets/icon-2.svg', alt: 'TRUSTe' },
  { id: '46', imgSrc: '/src/assets/icon-3.svg', alt: '256 BIT' },
];

export const footerImage: ImageData = {
  imgSrc: '/src/assets/cards.svg',
  alt: 'Accepted payment methods',
  id: '222',
};
