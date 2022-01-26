import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/services/domain/appconfig';
import { environment } from 'src/environments/environment';
import { AgenteTickets } from '../../graficos/models/agenteTickets';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-analista',
  templateUrl: './tickets-analista.component.html',
  styleUrls: ['./tickets-analista.component.css']
})
export class TicketsAnalistaComponent implements OnInit {

  public stackedData: any;
  public stackedOptions: any;
  public subscription!: Subscription;
  public urlServe!: string;
  public valida: boolean = true;
  public ticketsAgente!: AgenteTickets[];

  public config!: AppConfig;

  public agente: string[] = [];
  public agenteInAttendance: number[] = [];
  public agenteNew: number[] = [];
  public agenteStopped: number[] = [];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsAgente = config.agente!;

    for (let cont = 0; cont < this.ticketsAgente.length; cont++) {
      this.agente.push(this.ticketsAgente[cont].businessName!);
      this.agenteInAttendance.push(this.ticketsAgente[cont].quantTicketsInAttendance!);
      this.agenteNew.push(this.ticketsAgente[cont].quantTicketsNew!);
      this.agenteStopped.push(this.ticketsAgente[cont].quantTicketsStopped!);
    }

    console.log(config.registros);
    this.urlServe = environment.api + '/api/tickets';
  }

  ngOnInit(): void {
    this.valida = true;

    this.stackedData = {
      labels: this.agente,
      datasets: [{
        type: 'bar',
        label: 'Novo',
        backgroundColor: '#42A5F5',
        data: this.agenteNew
      }, {
        type: 'bar',
        label: 'Em Atendimento',
        backgroundColor: '#66BB6A',
        data: this.agenteInAttendance
      }, {
        type: 'bar',
        label: 'Parado',
        backgroundColor: '#FFA726',
        data: this.agenteStopped
      }]
    };

    this.stackedOptions = {
      tooltips: {
        mode: 'index',
        intersect: false
      },
      responsive: true,
      scales: {
        xAxes: {
          stacked: true,
        },
        yAxes: {
          stacked: true
        }
      }
    };

    this.timeAtualizaPage();

  }

   //atualiza a pagina a cada 15 minutos
   public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['loading'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }

}
