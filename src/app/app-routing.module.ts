import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSuperHeroesComponent } from './super-heroes/all-super-heroes/all-super-heroes.component';
import { AddSuperHeroesComponent } from './super-heroes/add-super-heroes/add-super-heroes.component';

const routes: Routes = [
	{
		path: "",
		component: AllSuperHeroesComponent
	},
	{
		path: "add-super-hero",
		component: AddSuperHeroesComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
