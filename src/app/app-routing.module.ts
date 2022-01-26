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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
