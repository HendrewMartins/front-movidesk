import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveDayDayCategoryService } from '../../graficos/services/graficos-resolvedDayDayCategory.service';
import { TicketsDayCategoryComponent } from './tickets-day-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsDayCategoryComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      daydaycategory: GraficoResolveDayDayCategoryService
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
export class TicketsDayCategoryRoutingModule { }
