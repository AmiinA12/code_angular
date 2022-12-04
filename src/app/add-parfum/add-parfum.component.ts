import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-add-parfum',
  templateUrl: './add-parfum.component.html',
  styleUrls: ['./add-parfum.component.css']
})
export class AddParfumComponent implements OnInit {
  newParfum = new Parfum();
  marques! : Marque[];
newIdMrq! : number;
newMarque! : Marque;
  constructor(private parfumService: ParfumService,private router :Router) { }

  ngOnInit(): void {
    this.parfumService.listeMarques().
    subscribe(mrqs => {this.marques = mrqs._embedded.marques;
      
    console.log(mrqs);
    });
    }
    
  
    addParfum(){
      this.newParfum.marque = this.marques.find(cat => cat.idMrq == this.newIdMrq)!;
      this.parfumService.ajouterParfum(this.newParfum)
      .subscribe(prf => {
      console.log(prf);
      this.router.navigate(['parfums']);
      });
      }
    

}
