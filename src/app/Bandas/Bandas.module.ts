import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasComponent } from './Bandas.component';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';
import { BandaService } from './banda.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandasComponent, BandaDetailComponent],
  exports: [BandasComponent],
  providers: [BandaService]
})
export class BandasModule { }
