import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAgenteDayService } from '../../graficos/services/graficos-resolvedAgenteDay.service';
import { TicketsDayStatusComponent } from './tickets-day-status.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsDayStatusComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      dayagente: GraficoResolveAgenteDayService,
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
export class TicketsDayStatusRoutingModule { }
