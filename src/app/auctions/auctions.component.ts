import {Component, OnInit} from '@angular/core';
import {Auction} from "./auction";
import {Router} from "@angular/router";
import {AuctionService} from "../service/auction.service";

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[] = []

  constructor(
    private router: Router,
    private auctionService: AuctionService
  ) {

  }

  ngOnInit(): void {
    this.auctionService.getAuctions()
      .subscribe(auctions => {
        console.log(auctions)
        this.auctions = auctions;
      });
  }

  onTitleClick(title: string) {
    this.router.navigate(['/aukcje/' + title]);
  }
}
