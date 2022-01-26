import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAgenteCategoryService } from '../../graficos/services/graficos-resolvedAgenteCategory.service';
import { TicketsCategoryComponent } from './tickets-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsCategoryComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      agenteCategory: GraficoResolveAgenteCategoryService
    }
  },
  {
    path: 'loading', component: LoadingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsCategoryRoutingModule { }
