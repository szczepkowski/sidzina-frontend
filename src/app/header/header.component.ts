import {Component, OnInit} from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {state} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
  }

  async isLoggedIn() {
    let loggedin = null;
    loggedin = await this.keycloakService.isLoggedIn().then((response) => {
      return response;

    }).catch((error) => {
      console.log(error)
    })
    return loggedin;
  }

  login() {
    this.keycloakService.login({
      redirectUri: window.location.origin,
    }).then(r => {
      return r;
    });
  }

  logout() {
    this.keycloakService.logout()
      .then(
        () => this.keycloakService.clearToken()
      ).catch((error) => {
      console.log(error)
    });
    return true;
  }


}
