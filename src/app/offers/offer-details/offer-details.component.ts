import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Offer} from "../offer";
import {AuctionService} from "../../service/auction.service";
import {ActivatedRoute} from "@angular/router";
import {OffersService} from "../../service/offers.service";

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {
  offer!: Offer;
  imageObjects: Array<object> = [];
  private title: string | null;

  constructor(private offerService: OffersService,
              private route: ActivatedRoute) {
    this.title = route.snapshot.paramMap.get('title');
  }

  ngOnInit(): void {
    this.setImageObject();
    this.offerService.getOffer(this.title)
      .subscribe(offer => {
        console.log(offer)
        this.offer = offer;
      });
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
