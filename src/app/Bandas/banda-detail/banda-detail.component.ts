import { Component, OnInit, Input} from '@angular/core';
import { Banda } from '../banda';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  @Input() selectedBanda!: Banda;
  constructor() { }

  ngOnInit() {
  }

}
