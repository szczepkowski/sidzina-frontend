import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {of} from "rxjs";
import {OffersService} from "../../service/offers.service";
import {Offer} from "../../offers/offer";

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  constructor(private offerService: OffersService) {
  }

  ngOnInit(): void {

  }

  addOffer(form: NgForm) {

    const offer = new Offer(
      form.value.title,
      form.value.description,
      form.value.price
    )

    alert(' adding offer ' + JSON.stringify(offer));
    this.offerService.addOffer(offer)
    form.resetForm();
  }
}
