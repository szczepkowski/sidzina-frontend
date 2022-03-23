import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Offer} from "../offers/offer";
import {environment} from "../../environments/environment";
import {MessageModel} from "./message.model";
import {Observable} from "rxjs";
import {Auction} from "../auctions/auction";

@Injectable()
export class OffersService {

  OFFERS_URL = environment.API_URL + '/offers/';

  offers: Offer[] = []

  constructor(private http: HttpClient) {
  }

  addOffer(offer: Offer): void {
    this.offers.push(offer)
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.OFFERS_URL);

  }


  getOffer(title: String): Observable<Offer> {
    return this.http.get<Offer>(this.OFFERS_URL + title);

  }


}
