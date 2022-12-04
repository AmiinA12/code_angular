import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  parfums! : Parfum[];
  IdMarque! : number;
  marques! : Marque[];
  constructor(private parfumService :ParfumService) { }

  ngOnInit(): void {
    this.parfumService.listeMarques().subscribe(mrqs => {this.marques = mrqs._embedded.marques;
    console.log(mrqs);
});
  }
  onChange() { 
    this.parfumService.rechercherParMarque(this.IdMarque).
    subscribe(prods =>{this.parfums=prods});
    }

}
