import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/services/domain/appconfig';
import { environment } from 'src/environments/environment';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsSituacao } from '../../graficos/models/ticketsSituacao';
import { TicketsType } from '../../graficos/models/ticketsType';
import { TicketsUrgency } from '../../graficos/models/ticketsUrgencia';

@Component({
  selector: 'app-tickets-abertos',
  templateUrl: './tickets-abertos.component.html',
  styleUrls: ['./tickets-abertos.component.css']
})
export class TicketsAbertosComponent implements OnInit {

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

  public tab: number = 0;

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsSituacao = config.registros!;
    this.ticketsUrgecia = config.urgency!;
    this.ticketsType = config.type!;


    console.log(config.registros);
    this.urlServe = environment.api + '/api/tickets';
  }

  ngOnInit(): void {
    this.valida = true;


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
  }

  public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['abertos'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }
}
