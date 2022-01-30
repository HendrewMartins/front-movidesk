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
import { GraficoResolveAnosService } from '../../graficos/services/graficos-resolvedAnos.service';
import { GraficoResolveMesesService } from '../../graficos/services/graficos-resolvedMeses.service';
import { GraficoResolveSevenSituacaoService } from '../../graficos/services/graficos-resolvedSevenSituacao.service';
import { GraficoResolveSevenUrgencyService } from '../../graficos/services/graficos-resolvedSevenUrgency.service';
import { GraficoResolveSevenCategoryService } from '../../graficos/services/graficos-resolvedSevenCategory.service';
import { GraficoResolveAgenteSevenService } from '../../graficos/services/graficos-resolvedAgenteSeven.service';
import { GraficoResolveSevenDayCategoryService } from '../../graficos/services/graficos-resolvedSevenDayCategory.service';
import { GraficoResolveDayCategoryService } from '../../graficos/services/graficos-resolvedDayCategory.service';
import { GraficoResolveDaySituacaoService } from '../../graficos/services/graficos-resolvedDaySituacao.service';
import { GraficoResolveDayUrgencyService } from '../../graficos/services/graficos-resolvedDayUrgency.service';
import { GraficoResolveAgenteDayService } from '../../graficos/services/graficos-resolvedAgenteDay.service';
import { GraficoResolveDayDayCategoryService } from '../../graficos/services/graficos-resolvedDayDayCategory.service';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
