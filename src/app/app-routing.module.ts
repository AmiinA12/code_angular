import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParfumComponent } from './add-parfum/add-parfum.component';

import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';

import { ParfumsComponent } from './parfums/parfums.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';


import { UpdateParfumComponent } from './update-parfum/update-parfum.component';

const routes: Routes = [{path: "parfums", component : ParfumsComponent},
{path: "add-parfum", component : AddParfumComponent},
{path: "updateParfum/:id", component: UpdateParfumComponent},
{path: "rechercheParMarque", component : RechercheParMarqueComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeMarques", component : ListeMarquesComponent},
{path: 'login', component: LoginComponent},




{ path: "", redirectTo: "parfums", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
