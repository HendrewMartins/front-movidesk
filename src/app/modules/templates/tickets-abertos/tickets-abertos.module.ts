import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsAbertosRoutingModule } from './tickets-abertos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TicketsAbertosComponent } from './tickets-abertos.component';


@NgModule({
  declarations: [TicketsAbertosComponent],
  imports: [
    CommonModule,
    TicketsAbertosRoutingModule,
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
export class TicketsAbertosModule { }
