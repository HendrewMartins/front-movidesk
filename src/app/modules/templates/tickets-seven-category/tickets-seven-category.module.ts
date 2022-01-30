import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsSevenCategoryRoutingModule } from './tickets-seven-category-routing.module';
import { TicketsSevenCategoryComponent } from './tickets-seven-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';
import { PrimeNgModule } from '../../primeng.module';
import { SplitterModule } from 'primeng/splitter';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    TicketsSevenCategoryComponent
  ],
  imports: [
    CommonModule,
    TicketsSevenCategoryRoutingModule,
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
export class TicketsSevenCategoryModule { }
