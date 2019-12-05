import { Component } from '@angular/core';
import { MsalService } from './services/msal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private msalService: MsalService) {
    if (this.msalService.isAuthenticated) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
