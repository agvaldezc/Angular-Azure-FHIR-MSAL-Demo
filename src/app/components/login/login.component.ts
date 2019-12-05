import { Component, OnInit } from '@angular/core';
import { MsalService } from 'src/app/services/msal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private msalService: MsalService) {}

  ngOnInit() {}

  public login(): void {
    this.msalService.login();
  }
}
