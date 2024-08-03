import { ImageData } from '../interfaces/ImageData';
export const mainProductImage: ImageData = {
  id: '1',
  imgSrc: '/images/gallery-1.svg',
  alt: 'Main Product Image',
};

export const thumbnailImages: ImageData[] = [
  { id: '2', imgSrc: '/images/gallery-2.svg', alt: 'Thumbnail 1' },
  { id: '3', imgSrc: '/images/gallery-3.svg', alt: 'Thumbnail 2' },
  { id: '4', imgSrc: '/images/gallery-4.svg', alt: 'Thumbnail 3' },
];
export const securityProviders: ImageData[] = [
  { id: '44', imgSrc: '/images/icon-1.svg', alt: 'McAfee Secure' },
  { id: '45', imgSrc: '/images/icon-2.svg', alt: 'TRUSTe' },
  { id: '46', imgSrc: '/images/icon-3.svg', alt: '256 BIT' },
];

export const footerImage: ImageData = {
  imgSrc: '/images/cards.svg',
  alt: 'Accepted payment methods',
  id: '222',
};
