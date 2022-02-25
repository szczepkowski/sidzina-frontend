import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imageObjects: Array<object> = []

  constructor() {
  }

  ngOnInit(): void {
    this.setImageObject();
  }

  setImageObject() {

    this.imageObjects.push(
      {
        image: '/assets/img/sidzina.JPG',
        thumbImage: '/assets/img/sidzina.JPG',
        alt: 'alt of image',
        title: 'GoreIT',
        imagePopup: true,
      },
      {
        image: '/assets/img/goreit_logo.jpg',
        thumbImage: '/assets/img/goreit_logo.jpg',
        alt: 'alt of image',
        title: 'GoreIT',
        imagePopup: true,
      },
      {
        image: '/assets/img/logo_thumb.png',
        thumbImage: '/assets/img/logo_thumb.png',
        alt: 'alt of image',
        title: 'GoreIT',
        imagePopup: true,
      },
    );

  }

}
