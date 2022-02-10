import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tickets } from './modules/graficos/models/tickets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-movidesk';

  public urlServe!: string;
  public subscription!: Subscription;
  public ticketList!: Tickets[];

  constructor(private config: PrimeNGConfig,
    public route: ActivatedRoute,
    public http: HttpClient) {
      this.urlServe = environment.api + '/api/tickets';
    }

    ngOnInit() {
      this.timeCarregarTickets();
      this.timeCarregarStatusTickets();
        this.config.setTranslation({
          dayNames: [ "domingo","segunda","terça","quarta","quinta","sexta","sábado" ],
          dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
          dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
          monthNames: [ "Janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro" ],
          monthNamesShort: [ "jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez" ],
          today: 'Hoje',
          clear: 'Limpar',
          accept: 'Accept',
          reject: 'Cancel',
          emptyMessage: 'Nenhum resultado encontrado!',
          choose: 'Escolher',
          upload: 'Enviar',
          cancel: 'Cancelar'
            //Tradutor
        });
    }

    public timeCarregarTickets() {
      setTimeout(() => {
        this.subscription = this.route.params.subscribe(params => {
          this.atualizaTickets();
        });
        this.timeCarregarTickets();
        console.log('10 minutos');
      }, 600000);
    }

    public timeCarregarStatusTickets() {
      setTimeout(() => {
        this.subscription = this.route.params.subscribe(params => {
          this.atualizaStatusTickets();
        });
        this.timeCarregarStatusTickets();
        console.log('22 minutos');
      }, 1320000);
    }

    public atualizaTickets() {

      this.updateTickets().subscribe((registro: Tickets[]) => {
        this.ticketList = registro;
        console.log(this.ticketList);
      }, error => {
        console.error(error);
      });
      return false;
    }
  
  
    public updateTickets(): Observable<Tickets[]> {
      return this.http.get<Tickets[]>(this.urlServe + '/updateTickets').pipe(map((item: any) => {
        return item;
      }));
    }

    public atualizaStatusTickets() {

      this.updateStatusTickets().subscribe((registro: Tickets[]) => {
        this.ticketList = registro;
        console.log(this.ticketList);
      }, error => {
        console.error(error);
      });
      return false;
    }
  
  
    public updateStatusTickets(): Observable<Tickets[]> {
      return this.http.get<Tickets[]>(this.urlServe + '/statusTickets').pipe(map((item: any) => {
        return item;
      }));
    }
}
