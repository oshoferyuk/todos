import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

	isNotAuth(){
		return !this.auth.isAuth();
	}

	onLogout(){
		console.log('LOGOUT!!! &*** ');
		this.auth.logout();
	}
}
