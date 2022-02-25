import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Offer} from "./offer";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  @Input() offers: Offer[] = [new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10),
    new Offer("1", "1", 10, 10)
  ];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // this.paramsSubscription = this.activatedRoute.params
    //   .subscribe((params: Params) => {
    //     this.categoryName = params.category;
    //     console.log('route param id' + this.categoryName);
    //
    //     this.productService.getByCategory(this.categoryName)
    //       .subscribe(apiProducts => {
    //         this.products = apiProducts;
    //       });
    //   });

  }

  onTitleClick(title: string) {
    this.router.navigate(['/uslugi/' + title]);
  }
}
