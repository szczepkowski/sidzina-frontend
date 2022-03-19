import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Offer} from "../offer";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  offer: Offer = new Offer("Usluge kladzenia kafli",
    " Usluge kladzenia kafli Usluge kladzenia kafli Usluge kladzenia kafli Usluge kladzenia kafli Usluge kladzenia kafli", 10);
  imageObjects: Array<object> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.setImageObject()
  }

  isLoggedIn() {
    return false;
  }

  onOrderBuyClick(n: NgForm) {
    alert("mock buy" + JSON.stringify(n.value))
  }

  setImageObject() {

    this.imageObjects.push({
      image: 'https://youtu.be/dpXn9Cn9toU',
      thumbImage: 'https://youtu.be/dpXn9Cn9toU',
      alt: 'alt of image',
      title: 'Filmik o gShop',
      imagePopup: true,
    });


  }
}
