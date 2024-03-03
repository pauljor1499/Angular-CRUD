import { Component } from '@angular/core';
import { CreateOrUpdateSuperHero } from '../create-or-update-super-hero';
import { SuperHeroesService } from '../super-heroes.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-super-heroes',
	templateUrl: './add-super-heroes.component.html',
	styleUrls: ['./add-super-heroes.component.scss']
})

export class AddSuperHeroesComponent {
	constructor(private superHeroesService: SuperHeroesService, private router: Router) { }

	superHeroes: CreateOrUpdateSuperHero = {
		name: '',
		powers: '',
		franchise: '',
		imageURL: '',
	};

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
	}

	create() {
		this.superHeroesService.create(this.superHeroes).subscribe(() => {
			this.router.navigate(['/']);
		})
	}
}
