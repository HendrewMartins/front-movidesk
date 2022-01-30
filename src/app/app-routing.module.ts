import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { 
    path: 'admin', component: AdminComponent, 

    children: [
          { path: 'graficos', loadChildren: () => import('./modules/graficos/graficos.module').then(m => m.GraficosModule)},
          { path: 'loading', loadChildren: () => import('./modules/cadastros/loading/loading.module').then(m => m.LoadingModule)},
          { path: 'abertos', loadChildren: () => import('./modules/templates/tickets-abertos/tickets-abertos.module').then(m => m.TicketsAbertosModule)},
          { path: 'abertosAnalista', loadChildren: () => import('./modules/templates/tickets-analista/tickets-analista.module').then(m => m.TicketsAnalistaModule)},
          { path: 'abertosCategoria', loadChildren: () => import('./modules/templates/tickets-category/tickets-category.module').then(m => m.TicketsCategoryModule)},
          { path: 'abertosJustificativa', loadChildren: () => import('./modules/templates/tickets-justification/tickets-justification.module').then(m => m.TicketsJustificationModule)},
          { path: 'categoriaJustificativa', loadChildren: () => import('./modules/templates/tickets-category-justification/tickets-category-justification.module').then(m => m.TicketsCategoryJustificationModule)},
          { path: 'anos', loadChildren: () => import('./modules/templates/tickets-anos/tickets-anos.module').then(m => m.TicketsAnosModule)},
          { path: 'anoscategoria', loadChildren: () => import('./modules/templates/tickets-anos-category/tickets-anos-category.module').then(m => m.TicketsAnosCategoryModule)},
          { path: 'mesescategoria', loadChildren: () => import('./modules/templates/tickets-meses-category/tickets-meses-category.module').then(m => m.TicketsMesesCategoryModule)},
          { path: 'resumosevendias', loadChildren: () => import('./modules/templates/tickets-seven/tickets-seven.module').then(m => m.TicketsSevenModule)},
          { path: 'agentesevendias', loadChildren: () => import('./modules/templates/tickets-seven-status/tickets-seven-status.module').then(m => m.TicketsSevenStatusModule)},
          { path: 'categoriasevendias', loadChildren: () => import('./modules/templates/tickets-seven-category/tickets-seven-category.module').then(m => m.TicketsSevenCategoryModule)},
          { path: 'resumoday', loadChildren: () => import('./modules/templates/tickets-day/tickets-day.module').then(m => m.TicketsDayModule)},
          { path: 'agenteday', loadChildren: () => import('./modules/newtemplates/tickets-day-status/tickets-day-status.module').then(m => m.TicketsDayStatusModule)},
          { path: 'categoryday', loadChildren: () => import('./modules/templates/tickets-day-category/tickets-day-category.module').then(m => m.TicketsDayCategoryModule)},
        ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
