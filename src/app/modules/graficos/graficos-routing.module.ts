import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraficoResolveService } from './services/graficos-resolved.service';
import { GraficosComponent } from './graficos.component';
import { GRAFICOS__CONFIG } from './models/graficos-config';
import { GraficoResolveUrgencyService } from './services/gragicos-resolvedUrgency.service';
import { GraficoResolveTypeService } from './services/graficos-resolvedType.service';
import { LoadingComponent } from '../cadastros/loading/loading.component';
import { GraficoResolveAgenteService } from './services/graficos-resolvedAgente.service';
import { GraficoResolveAgenteCategoryService } from './services/graficos-resolvedAgenteCategory.service';
import { GraficoResolveAgenteJustificationService } from './services/graficos-resolvedAgenteJustification';
import { GraficoResolveCategoryService } from './services/graficos-resolvedCategory';
import { GraficoResolveJustificationService } from './services/graficos-resolvedJustification';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
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
  },
  {
    path: 'loading', component: LoadingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
