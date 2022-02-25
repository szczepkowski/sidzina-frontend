import { Component, OnInit } from '@angular/core';
import {Auction} from "./auction";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  auctions: Auction[] = [
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
    new Auction("Komputer MAC book pro 2013", "macbook pro 2013 13' ", 1999),
  ];

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  onTitleClick(title: string) {
    this.router.navigate(['/aukcje/' + title]);
  }
}
