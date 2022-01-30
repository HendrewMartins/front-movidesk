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
import { GraficoResolveAnosService } from './services/graficos-resolvedAnos.service';
import { GraficoResolveMesesService } from './services/graficos-resolvedMeses.service';
import { GraficoResolveSevenSituacaoService } from './services/graficos-resolvedSevenSituacao.service';
import { GraficoResolveSevenUrgencyService } from './services/graficos-resolvedSevenUrgency.service';
import { GraficoResolveSevenCategoryService } from './services/graficos-resolvedSevenCategory.service';
import { GraficoResolveAgenteSevenService } from './services/graficos-resolvedAgenteSeven.service';
import { GraficoResolveSevenDayCategoryService } from './services/graficos-resolvedSevenDayCategory.service';
import { GraficoResolveDayCategoryService } from './services/graficos-resolvedDayCategory.service';
import { GraficoResolveDaySituacaoService } from './services/graficos-resolvedDaySituacao.service';
import { GraficoResolveDayUrgencyService } from './services/graficos-resolvedDayUrgency.service';
import { GraficoResolveAgenteDayService } from './services/graficos-resolvedAgenteDay.service';
import { GraficoResolveDayDayCategoryService } from './services/graficos-resolvedDayDayCategory.service';


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
      justification: GraficoResolveJustificationService,
      anos: GraficoResolveAnosService,
      mesescategory: GraficoResolveMesesService,
      sevensituacao: GraficoResolveSevenSituacaoService,
      sevenurgency: GraficoResolveSevenUrgencyService,
      sevencategory: GraficoResolveSevenCategoryService,
      sevenagente: GraficoResolveAgenteSevenService,
      sevendaycategory: GraficoResolveSevenDayCategoryService,
      daysituacao: GraficoResolveDaySituacaoService,
      dayurgency: GraficoResolveDayUrgencyService,
      daycategory: GraficoResolveDayCategoryService,
      dayagente: GraficoResolveAgenteDayService,
      daydaycategory: GraficoResolveDayDayCategoryService,

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
