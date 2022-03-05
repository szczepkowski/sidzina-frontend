import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Offer} from "./offer";
import {OffersService} from "../service/offers.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  @Input() offers: Offer[] = [];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private offersService: OffersService
  ) {
  }

  ngOnInit(): void {
    this.offers = this.offersService.getOffers();
  }

  onTitleClick(title: string) {
    this.router.navigate(['/uslugi/' + title]);
  }
}
