import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAnosCategoryService } from '../../graficos/services/graficos-resolvedAnosCategory';
import { TicketsAnosCategoryComponent } from './tickets-anos-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsAnosCategoryComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      anoscategory: GraficoResolveAnosCategoryService
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
export class TicketsAnosCategoryRoutingModule { }
