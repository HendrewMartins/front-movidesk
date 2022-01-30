import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsAnosCategoryRoutingModule } from './tickets-anos-category-routing.module';
import { TicketsAnosCategoryComponent } from './tickets-anos-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    TicketsAnosCategoryComponent
  ],
  imports: [
    CommonModule,
    TicketsAnosCategoryRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PesquisaModule,
    PrimeNgModule,
    SplitterModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class TicketsAnosCategoryModule { }
