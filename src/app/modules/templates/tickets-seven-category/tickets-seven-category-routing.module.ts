import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveSevenDayCategoryService } from '../../graficos/services/graficos-resolvedSevenDayCategory.service';
import { TicketsSevenCategoryComponent } from './tickets-seven-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsSevenCategoryComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      sevendaycategory: GraficoResolveSevenDayCategoryService
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
export class TicketsSevenCategoryRoutingModule { }
