import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveAgenteService } from '../../graficos/services/graficos-resolvedAgente.service';
import { TicketsAnalistaComponent } from './tickets-analista.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsAnalistaComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      agente: GraficoResolveAgenteService
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
export class TicketsAnalistaRoutingModule { }
