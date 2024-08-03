import { ImageData } from './ImageData';

export interface ArticleData {
  titleStart: string;
  highlight: string;
  titleEnd: string;
  content: string;
  image: ImageData;
  mobilePosition: 'top' | 'bottom';
  desktopPosition: 'left' | 'right';
}
