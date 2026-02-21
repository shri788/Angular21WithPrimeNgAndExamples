import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  imports: [GalleriaModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images = [
  {
    itemImageSrc: 'https://picsum.photos/id/1018/800/500',
    thumbnailImageSrc: 'https://picsum.photos/id/1018/150/100',
    alt: 'Image 1',
    title: 'Image 1'
  },
  {
    itemImageSrc: 'https://picsum.photos/id/1015/800/500',
    thumbnailImageSrc: 'https://picsum.photos/id/1015/150/100',
    alt: 'Image 2',
    title: 'Image 2'
  },
  {
    itemImageSrc: 'https://picsum.photos/id/1019/800/500',
    thumbnailImageSrc: 'https://picsum.photos/id/1019/150/100',
    alt: 'Image 3',
    title: 'Image 3'
  }
  ];

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];
}
