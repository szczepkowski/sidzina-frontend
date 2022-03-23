import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auction} from "../auctions/auction";
import {environment} from "../../environments/environment";
import {Offer} from "../offers/offer";
import {Observable} from "rxjs";

@Injectable()
export class AuctionService {

  AUCTIONS_URL = environment.API_URL + '/auctions/';

  auctions: Auction[] = []

  constructor(private http: HttpClient) {
  }


  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(this.AUCTIONS_URL);

  }

  getAuction(title: String): Observable<Auction> {
    return this.http.get<Auction>(this.AUCTIONS_URL + title);

  }


}
