import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoResolveService } from '../../graficos/services/graficos-resolved.service';
import { GraficosComponent } from '../../graficos/graficos.component';
import { GraficoResolveUrgencyService } from '../../graficos/services/gragicos-resolvedUrgency.service';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { LoadingComponent } from './loading.component';
import { GraficoResolveTypeService } from '../../graficos/services/graficos-resolvedType.service';
import { GraficoResolveAgenteService } from '../../graficos/services/graficos-resolvedAgente.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'loading', pathMatch: 'full'
  },
  {
    path: 'loading', component: LoadingComponent
  },
  {
    path: 'chart', component: GraficosComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      registros: GraficoResolveService,
      urgency: GraficoResolveUrgencyService,
      type: GraficoResolveTypeService,
      agente: GraficoResolveAgenteService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
