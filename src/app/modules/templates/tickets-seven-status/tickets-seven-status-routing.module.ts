import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAgenteSevenService } from '../../graficos/services/graficos-resolvedAgenteSeven.service';
import { TicketsSevenStatusComponent } from './tickets-seven-status.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsSevenStatusComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      sevenagente: GraficoResolveAgenteSevenService,
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
export class TicketsSevenStatusRoutingModule { }
