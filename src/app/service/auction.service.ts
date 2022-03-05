import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Auction} from "../auctions/auction";

@Injectable()
export class AuctionService {

  auctions: Auction[] = [
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
  ];


  constructor(private http: HttpClient) {
  }

  addAuction(auction: Auction): void {
    this.auctions.push(auction)
  }

  getAuctions(): Auction[] {
    return this.auctions;
  }


}
