import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque } from '../model/marque.model';
import { Parfum } from '../model/parfum.model';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-update-parfum',
  templateUrl: './update-parfum.component.html',
  styles: [
  ]
})
export class UpdateParfumComponent implements OnInit {
  marques!: Marque[];
  updatedMrqId!: number;
  currentParfum = new Parfum();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private parfumService: ParfumService) { }
  ngOnInit() {

    this.parfumService.listeMarques().
      subscribe(mrqs => {
        this.marques = mrqs._embedded.marques;
        console.log(mrqs);
      });

    this.parfumService.consulterParfum(this.activatedRoute.snapshot.params['id']).
      subscribe(prf => {
        this.currentParfum = prf; this.updatedMrqId =
          this.currentParfum.marque.idMrq;
      });
  }

  updateParfum() {
    this.currentParfum.marque = this.marques.find(mrq => mrq.idMrq == this.updatedMrqId)!;
    this.parfumService.updateParfum(this.currentParfum).subscribe(prf => {
      this.router.navigate(['parfums']);
    }
    );
  }
  
}

