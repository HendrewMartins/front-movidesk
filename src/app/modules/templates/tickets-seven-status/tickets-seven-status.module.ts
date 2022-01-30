import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsSevenStatusRoutingModule } from './tickets-seven-status-routing.module';
import { TicketsSevenStatusComponent } from './tickets-seven-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    TicketsSevenStatusComponent
  ],
  imports: [
    CommonModule,
    TicketsSevenStatusRoutingModule,
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
export class TicketsSevenStatusModule { }
