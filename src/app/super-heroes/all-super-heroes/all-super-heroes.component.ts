import { Component } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';

@Component({
	selector: 'app-all-super-heroes',
	templateUrl: './all-super-heroes.component.html',
	styleUrls: ['./all-super-heroes.component.scss']
})

export class AllSuperHeroesComponent {
	constructor(private superHeroService: SuperHeroesService) { }

	superHeroes: SuperHeroes[] = [];

	ngOnInit(): void {
		this.getAll()
	}

	getAll() {
		this.superHeroService.get().subscribe((data) => {
			this.superHeroes = data;
		});
	}
}
