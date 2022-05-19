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
  average = 0;

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
       this.average += banda.seasons;
     })
     this.average = this.average / bandas.length;
     this.bandas = bandas;});
 }



 ngOnInit() {
   this.getBandasList()
 }

}
