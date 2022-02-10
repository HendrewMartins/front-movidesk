import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from '../../pesquisa/pesquisa.component';
import { PesquisaResolveService } from '../../pesquisa/services/pesquisa-resolve.service';
import { PESQUISA_OWNER_CONFIG } from './core/owner-pesquisa-config';
import { OwnerComponent } from './owner.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'carregar', pathMatch: 'full'
  },
  {
    path: 'pesquisa', component: PesquisaComponent,
    data: PESQUISA_OWNER_CONFIG,
    resolve: {
      registros: PesquisaResolveService
    }
  },
  {
    path: 'carregar', component: OwnerComponent,
    data: PESQUISA_OWNER_CONFIG
  },

  {
    path: 'novo', component: OwnerComponent
  },
  {
    path: ':id', component: OwnerComponent
  },
  {
    path: ':id/:delete', component: OwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
