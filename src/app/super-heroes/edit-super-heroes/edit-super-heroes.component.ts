import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperHeroesService } from '../super-heroes.service';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';

@Component({
	selector: 'app-edit-super-heroes',
	templateUrl: './edit-super-heroes.component.html',
	styleUrls: ['./edit-super-heroes.component.scss']
})

export class EditSuperHeroesComponent {
	constructor(private route: ActivatedRoute, private superHeroesService: SuperHeroesService, private router: Router) { }

	itemID: string = '';

	superHeroes: CreateOrUpdateSuperHero = {
		name: '',
		powers: '',
		franchise: '',
		imageURL: '',
	};

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			this.itemID = params.get('id') ?? ""
		})
		this.getByID();
	}

	getByID() {
		this.superHeroesService.getByID(this.itemID).subscribe((data) => {
			this.superHeroes.franchise = data.franchise;
			this.superHeroes.imageURL = data.imageURL;
			this.superHeroes.name = data.name;
			this.superHeroes.powers = data.powers;
		})
	}

	update() {
		this.superHeroesService.update(this.itemID, this.superHeroes).subscribe(() => {
			this.router.navigate(['/'])
		})
	}
}
