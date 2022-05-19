import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';

import { BandaService } from './banda.service';

@Component({
  selector: 'app-Bandas',
  templateUrl: './Bandas.component.html',
  styleUrls: ['./Bandas.component.css']
})
export class BandasComponent implements OnInit {
  bandas: Array<Banda> = [];
  averageMembers = 0;

  selectedBanda!: Banda;
  selected = false;

 onSelected(banda: Banda): void
 {
   this.selected = true;
   this.selectedBanda = banda;
 }

 constructor(private bandaService: BandaService) { }

 getBandasList()
 {
   this.bandaService.getBandas().subscribe(bandas => {
     bandas.forEach(banda => {
       this.averageMembers += banda.numberOfMembers;
     })
     this.averageMembers = Math.round(this.averageMembers / bandas.length);
     this.bandas = bandas;});
 }



 ngOnInit() {
   this.getBandasList()
 }

}
