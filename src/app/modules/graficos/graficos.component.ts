import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/services/domain/appconfig';
import { environment } from 'src/environments/environment';
import { ResolvedConfig } from './models/resolvedConfig';
import { TicketsSituacao } from './models/ticketsSituacao';
import { TicketsUrgency } from './models/ticketsUrgencia';
import { TicketsType } from './models/ticketsType';
import { AgenteTickets } from './models/agenteTickets';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit, OnDestroy {

  public stackedData: any;
  public stackedOptions: any;
  public subscription!: Subscription;

  public config!: AppConfig;

  public dataSituacaoPie: any;
  public chartOptionsSituacaoPie: any;
  public dataUrgenciaPie: any;
  public chartOptionsUrgenciaPie: any;
  public dataTipoPie: any;
  public chartOptionsTipoPie: any;
  public urlServe!: string;
  public valida: boolean = true;
  public ticketsSituacao!: TicketsSituacao;
  public ticketsUrgecia!: TicketsUrgency;
  public ticketsType!: TicketsType;
  public ticketsAgente!: AgenteTickets[];

  public tab: number = 0;

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
    this.ticketsSituacao = config.registros!;
    this.ticketsUrgecia = config.urgency!;
    this.ticketsType = config.type!;
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


    this.dataSituacaoPie = {
      labels: ['Novo-' + this.ticketsSituacao.newReg,
      'Em Atend.-' + this.ticketsSituacao.inAttendance,
      'Parado-' + this.ticketsSituacao.stopped],
      datasets: [
        {
          data: [this.ticketsSituacao.newReg, this.ticketsSituacao.inAttendance, this.ticketsSituacao.stopped],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };

    this.dataUrgenciaPie = {
      labels: ['Sem Urgencia-' + this.ticketsUrgecia.nulo,
      'Baixa-' + this.ticketsUrgecia.baixa,
      'Média-' + this.ticketsUrgecia.media,
      'Alta-' + this.ticketsUrgecia.alta,
      'Urgente-' + this.ticketsUrgecia.urgente],
      datasets: [
        {
          data: [this.ticketsUrgecia.nulo, this.ticketsUrgecia.baixa, this.ticketsUrgecia.media, this.ticketsUrgecia.alta, this.ticketsUrgecia.urgente],
          backgroundColor: [
            "#0512ff",
            "#1b8006",
            "#fff200",
            "#fc590d",
            "#b50505"
          ],
          hoverBackgroundColor: [
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505"
          ]
        }
      ]
    };

    this.dataTipoPie = {
      labels: ['Interno-' + this.ticketsType.interno,
      'Publico-' + this.ticketsType.externo],
      datasets: [
        {
          data: [this.ticketsType.interno, this.ticketsType.externo],
          backgroundColor: [
            "#cc0a95",
            "#0008ff"
          ],
          hoverBackgroundColor: [
            "#ff08b9",
            "#050a9e"
          ]
        }
      ]
    };
    this.valida = false;

    this.timeCarregar();
    this.timeAtualizaPage()
  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //tempo para a troca de pagina
  public timeCarregar() {
    setTimeout(() => {
      this.valida = true;
      this.tab = (this.tab === 1) ? this.tab = 0 : this.tab + 1;
      this.timeLoading();
      this.timeCarregar();
    }, 30000);
  }

  //faz o loading da troca de graficos
  public timeLoading() {
    setTimeout(() => {
      this.valida = false;
    }, 2000);
  }

  //atualiza a pagina a cada 15 minutos
  public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['loading'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }
}
