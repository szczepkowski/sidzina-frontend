import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addOffer(form: NgForm) {
    const offer = {
      title: form.value.title,
      description: form.value.description,
      price: form.value.price,
      email: form.value.email,
    };
    alert(' Mock add offer ' + JSON.stringify(offer));
  }

}
