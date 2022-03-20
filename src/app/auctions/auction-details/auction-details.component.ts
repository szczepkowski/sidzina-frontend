import {Component, Input, OnInit} from '@angular/core';
import {Auction} from "../auction";
import {AuctionService} from "../../service/auction.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {
  auction!: Auction;
  private title: string;
  imageObjects: Array<object> = [];

  constructor(private auctionService: AuctionService,
              private route: ActivatedRoute) {
    this.title = route.snapshot.paramMap.get('title');
  }

  ngOnInit(): void {
    this.setImageObject()
    this.auctionService.getAuction(this.title)
      .subscribe(auction => {
        console.log(auction)
        this.auction = auction;
      });
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
