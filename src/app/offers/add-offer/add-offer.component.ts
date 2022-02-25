import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {of} from "rxjs";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor() {
  }

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
