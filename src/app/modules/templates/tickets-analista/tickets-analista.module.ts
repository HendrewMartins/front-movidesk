import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsAnalistaRoutingModule } from './tickets-analista-routing.module';
import { TicketsAnalistaComponent } from './tickets-analista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TicketsAnalistaComponent],
  imports: [
    CommonModule,
    TicketsAnalistaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PesquisaModule,
    PrimeNgModule,
    SplitterModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class TicketsAnalistaModule { }
