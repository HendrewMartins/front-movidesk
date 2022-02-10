import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from '../../pesquisa/pesquisa.component';
import { PesquisaResolveService } from '../../pesquisa/services/pesquisa-resolve.service';
import { CategoryownerComponent } from './categoryowner.component';
import { PESQUISA_CATEGORYOWNER_CONFIG } from './core/categoryowner-pesquisa-config';

const routes: Routes = [
  {
    path: '', redirectTo: 'carregar', pathMatch: 'full'
  },
  {
    path: 'pesquisa', component: PesquisaComponent,
    data: PESQUISA_CATEGORYOWNER_CONFIG,
    resolve: {
      registros: PesquisaResolveService
    }
  },
  {
    path: 'carregar', component: CategoryownerComponent,
    data: PESQUISA_CATEGORYOWNER_CONFIG
  },

  {
    path: 'novo', component: CategoryownerComponent
  },
  {
    path: ':id', component: CategoryownerComponent
  },
  {
    path: ':id/:delete', component: CategoryownerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryownerRoutingModule { }
