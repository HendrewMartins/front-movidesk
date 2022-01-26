import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminComponent } from './pages/admin/admin.component';
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './pages/admin/header/header.component';
import { MenuComponent } from './pages/admin/menu/menu.component';
import { LoadingModule } from './modules/cadastros/loading/loading.module';
import { TicketsAbertosModule } from './modules/templates/tickets-abertos/tickets-abertos.module';
import { TicketsAnalistaModule } from './modules/templates/tickets-analista/tickets-analista.module';
import { TicketsCategoryModule } from './modules/templates/tickets-category/tickets-category.module';
import { TicketsJustificationModule } from './modules/templates/tickets-justification/tickets-justification.module';
import { TicketsCategoryJustificationModule } from './modules/templates/tickets-category-justification/tickets-category-justification.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    ToolbarModule,
    ButtonModule,
    SidebarModule,
    LoadingModule,
    TicketsAbertosModule,
    TicketsAnalistaModule,
    TicketsCategoryModule,
    TicketsJustificationModule,
    TicketsCategoryJustificationModule,
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

