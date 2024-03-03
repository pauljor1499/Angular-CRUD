import { Component } from '@angular/core';
import { SuperHeroesService } from '../super-heroes.service';
import { SuperHeroes } from '../super-heroes';

declare var window: any;

@Component({
	selector: 'app-all-super-heroes',
	templateUrl: './all-super-heroes.component.html',
	styleUrls: ['./all-super-heroes.component.scss']
})

export class AllSuperHeroesComponent {
	constructor(private superHeroService: SuperHeroesService) { }

	superHeroes: SuperHeroes[] = [];
	deleteModal: any;
	itemToDelete: string = '';

	ngOnInit(): void {
		this.deleteModal = new window.bootstrap.Modal(
			document.getElementById('deleteModal')
		)
		this.getAll()
	}

	openDeletePopup(id: string) {
		this.itemToDelete = id;
		this.deleteModal.show();
	}

	getAll() {
		this.superHeroService.get().subscribe((data) => {
			this.superHeroes = data;
		});
	}

	delete() {
		this.superHeroService.delete(this.itemToDelete).subscribe(() => {
			this.superHeroes = this.superHeroes.filter(item => item._id !== this.itemToDelete);
			this.deleteModal.hide()
		})
	}
}
