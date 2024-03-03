import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { SuperHeroes } from './super-heroes';

@Injectable({
	providedIn: 'root'
})
export class SuperHeroesService {

	constructor(private http: HttpClient) { }

	get() {
		return this.http.get<SuperHeroes[]>("http://localhost:3000/super-heroes");
	}
}
