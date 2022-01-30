import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsMesesCategoryRoutingModule } from './tickets-meses-category-routing.module';
import { TicketsMesesCategoryComponent } from './tickets-meses-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
  declarations: [
    TicketsMesesCategoryComponent
  ],
  imports: [
    CommonModule,
    TicketsMesesCategoryRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    PesquisaModule,
    PrimeNgModule,
    SplitterModule,
    MatGridListModule,
    MatCardModule,
  ]
})
export class TicketsMesesCategoryModule { }
