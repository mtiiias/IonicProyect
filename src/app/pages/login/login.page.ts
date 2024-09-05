import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public cuenta: string;
  public password: string;

  constructor(private router: Router) {
    this.cuenta = '';
    this.password = '';
  }

  ngOnInit() {
  }

  Ingresar(){

    if(this.cuenta == 'loonmoon' && this.password == 'chimuelo123'){
      
      const extras: NavigationExtras = {
        state: {
          cuenta: this.cuenta
        }
      };

      this.router.navigate(['inicio'], extras);
    } else{
      alert('Incorrecto')
    }
  }
}
