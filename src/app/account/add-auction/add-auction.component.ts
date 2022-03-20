import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuctionService} from "../../service/auction.service";
import {Auction} from "../../auctions/auction";

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  constructor(private auctionService: AuctionService) {
  }

  ngOnInit(): void {
  }

  addAuction(form: NgForm) {
    const auction = new Auction(
      form.value.title,
      form.value.description,
      form.value.price,
      form.value.sellerId
    )
    alert(' Mock add offer ' + JSON.stringify(auction));
  //  this.auctionService.addAuction(auction)
    form.reset()
  }


}
