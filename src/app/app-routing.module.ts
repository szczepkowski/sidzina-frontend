import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {AuthGuard} from "./guard/auth.guard";
import {ContactComponent} from "./contact/contact.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AuctionsComponent} from "./auctions/auctions.component";
import {OffersComponent} from "./offers/offers.component";
import {AddOfferComponent} from "./offers/add-offer/add-offer.component";
import {OfferDetailsComponent} from "./offers/offer-details/offer-details.component";
import {AuctionDetailsComponent} from "./auctions/auction-details/auction-details.component";
import {AddAuctionComponent} from "./auctions/add-auction/add-auction.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'aukcje', component: AuctionsComponent},
  {path: 'aukcje/dodaj', component: AddAuctionComponent},
  {path: 'aukcje/:title', component: AuctionDetailsComponent},
  {path: 'uslugi', component: OffersComponent},
  {path: 'uslugi/dodaj', component: AddOfferComponent},
  {path: 'uslugi/:title', component: OfferDetailsComponent},
  {path: 'portfolio/:name', component: PortfolioComponent },
  {path: 'konto', component: AccountComponent },
  {path: 'galeria', component: GalleryComponent},
  {path: 'kontakt', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
