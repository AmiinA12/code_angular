import { Component, OnInit } from '@angular/core';
import { Parfum } from '../model/parfum.model';
import { AuthService } from '../services/auth.service';
import { ParfumService } from '../services/parfum.service';

@Component({
  selector: 'app-parfums',
  templateUrl: './parfums.component.html',
  styleUrls: ['./parfums.component.css']
})
export class ParfumsComponent implements OnInit {
  parfums! : Parfum[];
  constructor(private parfumService: ParfumService ,public authService: AuthService) {
    //this.parfums = parfumService.listeParfums();
    }
    

  ngOnInit(): void {
    this.chargerParfums();
  }
  chargerParfums(){
    this.parfumService.listeParfum().subscribe(prfs => {
    console.log(prfs);
    this.parfums = prfs;
    });
    }
    
  supprimerParfum(f: Parfum)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.parfumService.supprimerParfum(f.idParfum!).subscribe(() => {
console.log("produit supprimé");
this.chargerParfums();
});
} 
}
