import { Component, OnInit } from '@angular/core';
import { MsalService } from 'src/app/services/msal.service';
import { Router } from '@angular/router';

import {User as MsalUser} from 'msal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public patients: Observable<any[]>;

  constructor(private msalService: MsalService, private router: Router, private httpClient: HttpClient) {
    if (!this.msalService.isAuthenticated) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.patients = this.getPatients().pipe(
      map((res) => res.entry)
    );
  }

  public logout(): void {
    this.msalService.logout();
  }

  public getPatients(): Observable<any> {
    return this.httpClient.get(`${environment.MSAL_ENV_CONFIG.FHIR_ENDPOINT}/Patient`);
  }

  get user(): MsalUser {
    return this.msalService.user;
  }
}
