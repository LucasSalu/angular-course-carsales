import { LoginService } from './../../resources/services/login.service';
import { RequestLogin } from './../../resources/models/ResquestLogin';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public requestLogin: RequestLogin;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin;
  }

  doLogin(): void {
    this.loginService.doLogin(this.requestLogin).subscribe((data) => {
      console.log(data);
    },
      error => {
        console.log(error);
      }
    );
  }

}
