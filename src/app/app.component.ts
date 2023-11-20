import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SpringAngularTutor';
 // greeting = {'id':'XXX', 'content': 'Hello world'};
 greeting: any = {};
 
 constructor(private http:HttpClient) {
	 http.get('http://127.0.0.1:8080/resource', { withCredentials: true }).subscribe((data:any) => this.greeting = data,
	 (error: any) => console.error('Error:', error));
 }
}
