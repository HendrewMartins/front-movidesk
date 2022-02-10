import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryownerRoutingModule } from './categoryowner-routing.module';
import { CategoryownerComponent } from './categoryowner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../primeng.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioModule } from '../../formulario/formulario.module';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';


@NgModule({
  declarations: [
    CategoryownerComponent
  ],
  imports: [
    CommonModule,
    CategoryownerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule
  ]
})
export class CategoryownerModule { }
