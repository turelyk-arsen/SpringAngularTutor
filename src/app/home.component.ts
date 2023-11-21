import { HttpClient } from "@angular/common/http";
import { AppService } from "./app.service";
import {Component, OnInit} from '@angular/core';

@Component({
	templateUrl: './home.component.html'
})
export class HomeComponent {
	title = 'Angular Part';
	greeting = {};
	
	constructor(private app: AppService, private http: HttpClient) {
		http.get('resource').subscribe(data => this.greeting = data);
	}
	
	authenticated() {
		return this.app.authenticated;
	}
}