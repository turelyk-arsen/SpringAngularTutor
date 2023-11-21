import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppService} from './app.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 // title = 'SpringAngularTutor';
 //greeting: any = {};
 
 constructor(private app: AppService, private http: HttpClient, private router: Router) {
//	 http.get('http://127.0.0.1:8080/resource', { withCredentials: true }).subscribe((data:any) => this.greeting = data,
//	 (error: any) => console.error('Error:', error));
     this.app.authenticate(undefined, undefined);
 }
 
 logout() {
	 this.http.post('logout', {}).pipe(finalize(() => {
		 this.app.authenticated = false;
		 this.router.navigateByUrl('/login');
	 })).subscribe();
 }
}
