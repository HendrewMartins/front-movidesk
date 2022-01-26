import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoResolveService } from '../../graficos/services/graficos-resolved.service';
import { GraficosComponent } from '../../graficos/graficos.component';
import { GraficoResolveUrgencyService } from '../../graficos/services/gragicos-resolvedUrgency.service';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { LoadingComponent } from './loading.component';
import { GraficoResolveTypeService } from '../../graficos/services/graficos-resolvedType.service';
import { GraficoResolveAgenteService } from '../../graficos/services/graficos-resolvedAgente.service';
import { GraficoResolveAgenteCategoryService } from '../../graficos/services/graficos-resolvedAgenteCategory.service';
import { GraficoResolveAgenteJustificationService } from '../../graficos/services/graficos-resolvedAgenteJustification';
import { GraficoResolveCategoryService } from '../../graficos/services/graficos-resolvedCategory';
import { GraficoResolveJustificationService } from '../../graficos/services/graficos-resolvedJustification';

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
      agente: GraficoResolveAgenteService,
      agenteCategory: GraficoResolveAgenteCategoryService,
      agenteJustification: GraficoResolveAgenteJustificationService,
      category: GraficoResolveCategoryService,
      justification: GraficoResolveJustificationService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
