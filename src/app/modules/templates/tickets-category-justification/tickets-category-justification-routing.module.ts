import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveCategoryService } from '../../graficos/services/graficos-resolvedCategory';
import { GraficoResolveJustificationService } from '../../graficos/services/graficos-resolvedJustification';
import { TicketsCategoryJustificationComponent } from './tickets-category-justification.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsCategoryJustificationComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      category: GraficoResolveCategoryService,
      justification: GraficoResolveJustificationService
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
export class TicketsCategoryJustificationRoutingModule { }
