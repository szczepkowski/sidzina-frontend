import {Component, OnInit} from '@angular/core';
import {Auction} from "../auction";

@Component({
  selector: 'app-auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.css']
})
export class AuctionDetailsComponent implements OnInit {
  auction: Auction = new Auction("1", "1", 1999);

  constructor() {
  }

  ngOnInit(): void {
  }

}
