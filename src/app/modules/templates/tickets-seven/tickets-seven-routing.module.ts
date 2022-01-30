import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveSevenCategoryService } from '../../graficos/services/graficos-resolvedSevenCategory.service';
import { GraficoResolveSevenSituacaoService } from '../../graficos/services/graficos-resolvedSevenSituacao.service';
import { GraficoResolveSevenUrgencyService } from '../../graficos/services/graficos-resolvedSevenUrgency.service';
import { TicketsSevenComponent } from './tickets-seven.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsSevenComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      sevensituacao: GraficoResolveSevenSituacaoService,
      sevenurgency: GraficoResolveSevenUrgencyService,
      sevencategory: GraficoResolveSevenCategoryService
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
export class TicketsSevenRoutingModule { }
