import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponent } from '../../cadastros/loading/loading.component';
import { GRAFICOS__CONFIG } from '../../graficos/models/graficos-config';
import { GraficoResolveMesesService } from '../../graficos/services/graficos-resolvedMeses.service';
import { TicketsMesesCategoryComponent } from './tickets-meses-category.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'chart', pathMatch: 'full'
  },
  {
    path: 'chart', component: TicketsMesesCategoryComponent,
    data: GRAFICOS__CONFIG,
    resolve: {
      mesescategory: GraficoResolveMesesService
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
export class TicketsMesesCategoryRoutingModule { }
