import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsJustificationRoutingModule } from './tickets-justification-routing.module';
import { TicketsJustificationComponent } from './tickets-justification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [TicketsJustificationComponent],
  imports: [
    CommonModule,
    TicketsJustificationRoutingModule,
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
export class TicketsJustificationModule { }
