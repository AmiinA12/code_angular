import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styles: [
  ]
})
export class ListeMarquesComponent implements OnInit {
  updatedMrq:Marque = {"idMrq":0,"nomMrq":""};

  marques! : Marque[];
  ajout:boolean=true;
  constructor(private parfumService : ParfumService) { }

  ngOnInit(): void {this.parfumService.listeMarques().subscribe(mrqs => {this.marques = mrqs._embedded.marques;
    console.log(mrqs);
    });
  }
  marqueUpdated(mrq:Marque){
    console.log("Mrq updated event",mrq);
    this.parfumService.ajouterMarque(mrq).
     subscribe( ()=> this.chargerMarques());
    }
    chargerMarques(){
      this.parfumService.listeMarques().
      subscribe(mrqs => {this.marques = mrqs._embedded.marques;
      console.log(mrqs);
      });
    }
      updateMrq(mrq:Marque) {
        this.ajout=false;
        this.updatedMrq=mrq;
        
        }

}
