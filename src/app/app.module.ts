import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import {initializeKeycloak} from "./init/keycloak-init.factory";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import {MessageService} from "./service/message.service";
import { HttpClientModule } from '@angular/common/http';
import { AuctionsComponent } from './auctions/auctions.component';
import { OffersComponent } from './offers/offers.component';
import { AddOfferComponent } from './offers/add-offer/add-offer.component';
import { OfferDetailsComponent } from './offers/offer-details/offer-details.component';
import { AuctionDetailsComponent } from './auctions/auction-details/auction-details.component';
import { AddAuctionComponent } from './auctions/add-auction/add-auction.component';
import {NgImageSliderModule} from "ng-image-slider";
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    ContactComponent,
    GalleryComponent,
    AuctionsComponent,
    OffersComponent,
    AddOfferComponent,
    OfferDetailsComponent,
    AuctionDetailsComponent,
    AddAuctionComponent,
    PortfolioComponent
  ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        KeycloakAngularModule,
        HttpClientModule,
        NgImageSliderModule
    ],
  providers: [ MessageService
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
