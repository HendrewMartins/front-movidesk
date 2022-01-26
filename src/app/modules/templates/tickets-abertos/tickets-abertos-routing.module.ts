import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveService } from '../../graficos/services/graficos-resolved.service';
import { GraficoResolveAgenteService } from '../../graficos/services/graficos-resolvedAgente.service';
import { GraficoResolveTypeService } from '../../graficos/services/graficos-resolvedType.service';
import { GraficoResolveUrgencyService } from '../../graficos/services/gragicos-resolvedUrgency.service';
import { TicketsAbertosComponent } from './tickets-abertos.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsAbertosComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      registros: GraficoResolveService,
      urgency: GraficoResolveUrgencyService,
      type: GraficoResolveTypeService
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
export class TicketsAbertosRoutingModule { }
