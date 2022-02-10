import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../primeng.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioModule } from '../../formulario/formulario.module';
import { PesquisaModule } from '../../pesquisa/pesquisa.module';


@NgModule({
  declarations: [
    OwnerComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FlexLayoutModule,
    FormularioModule,
    PesquisaModule
  ]
})
export class OwnerModule { }
