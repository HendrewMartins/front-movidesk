import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveDayCategoryService } from '../../graficos/services/graficos-resolvedDayCategory.service';
import { GraficoResolveDaySituacaoService } from '../../graficos/services/graficos-resolvedDaySituacao.service';
import { GraficoResolveDayUrgencyService } from '../../graficos/services/graficos-resolvedDayUrgency.service';
import { TicketsDayComponent } from './tickets-day.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsDayComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      daysituacao: GraficoResolveDaySituacaoService,
      dayurgency: GraficoResolveDayUrgencyService,
      daycategory: GraficoResolveDayCategoryService
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
export class TicketsDayRoutingModule { }
