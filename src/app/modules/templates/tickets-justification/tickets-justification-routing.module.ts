import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAgenteJustificationService } from '../../graficos/services/graficos-resolvedAgenteJustification';
import { TicketsJustificationComponent } from './tickets-justification.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsJustificationComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      agenteJustification: GraficoResolveAgenteJustificationService
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
export class TicketsJustificationRoutingModule { }
