import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offer} from "../offers/offer";

@Injectable()
export class OffersService {

  offers: Offer[] = [new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10)
  ];

  constructor(private http: HttpClient) {
  }

  addOffer(offer: Offer): void {
    this.offers.push(offer)
  }

  getOffers(): Offer[] {
    return this.offers;
  }


}
