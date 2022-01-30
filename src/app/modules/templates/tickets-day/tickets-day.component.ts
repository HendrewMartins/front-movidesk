import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../graficos/models/category';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsSituacao } from '../../graficos/models/ticketsSituacao';
import { TicketsUrgency } from '../../graficos/models/ticketsUrgencia';

@Component({
  selector: 'app-tickets-day',
  templateUrl: './tickets-day.component.html',
  styleUrls: ['./tickets-day.component.css']
})
export class TicketsDayComponent implements OnInit {

    //tickets por situacao 7 dias
    public dataSitDayPie: any;
    public chartOptionsSitDayPie: any;
  
    //tickets por urgencia7 dias
    public dataUrgDayPie: any;
    public chartOptionsUrgDayPie: any;
  
    //tickets por Categoria 7 dias
    public dataCatDayPie: any;
    public chartOptionsCatDayPie: any;
  
    public ticketsDaySituacao!: TicketsSituacao;
    public ticketsDayUrgecia!: TicketsUrgency;
    public ticketsDayCategory!: Category;

  constructor(public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,) 
    {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsDaySituacao = config.daysituacao!;
    this.ticketsDayUrgecia = config.dayurgency!;
    this.ticketsDayCategory = config.daycategory!;
  }

   
  ngOnInit(): void {

    this.dataSitDayPie = {
      labels: ['Novo-' + this.ticketsDaySituacao.newReg,
      'Em Atend.-' + this.ticketsDaySituacao.inAttendance,
      'Parado-' + this.ticketsDaySituacao.stopped,
      'Cancelado-' + this.ticketsDaySituacao.canceled,
      'Resolvido-' + this.ticketsDaySituacao.resolved,
      'Fechado-' + this.ticketsDaySituacao.closed],
      datasets: [
        {
          data: [this.ticketsDaySituacao.newReg, this.ticketsDaySituacao.inAttendance,
          this.ticketsDaySituacao.stopped, this.ticketsDaySituacao.canceled,
          this.ticketsDaySituacao.resolved, this.ticketsDaySituacao.closed],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#b80000",
            "#00ffe5",
            "#e30ebf"

          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#b53535",
            "#b3f5ee",
            "#eb8ddb"
          ]
        }
      ]
    };

    this.dataUrgDayPie = {
      labels: ['Sem Urgencia-' + this.ticketsDayUrgecia.nulo,
      'Baixa-' + this.ticketsDayUrgecia.baixa,
      'Média-' + this.ticketsDayUrgecia.media,
      'Alta-' + this.ticketsDayUrgecia.alta,
      'Urgente-' + this.ticketsDayUrgecia.urgente],
      datasets: [
        {
          data: [this.ticketsDayUrgecia.nulo, this.ticketsDayUrgecia.baixa, this.ticketsDayUrgecia.media,
          this.ticketsDayUrgecia.alta, this.ticketsDayUrgecia.urgente],
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

    this.dataCatDayPie = {
      labels: ['Customização-' + this.ticketsDayCategory.customizacao,
      'Dúvida-' + this.ticketsDayCategory.duvida,
      'Falha-' + this.ticketsDayCategory.falha,
      'Homologação-' + this.ticketsDayCategory.homologacao,
      'Licitação-' + this.ticketsDayCategory.licitacao,
      'Sem Categoria-' + this.ticketsDayCategory.semCategoria,
      'Implantação-' + this.ticketsDayCategory.implantacao,
      'Solicitação Serviço-' + this.ticketsDayCategory.solicitacaoServico,
      'Treinamento-' + this.ticketsDayCategory.solicitacaoTreinamento,
      'Treinamento Online-' + this.ticketsDayCategory.treinamentoOnline,
      'Sugestão-' + this.ticketsDayCategory.sugestao
      ],
      datasets: [
        {
          data: [
            this.ticketsDayCategory.customizacao, this.ticketsDayCategory.duvida, this.ticketsDayCategory.falha,
            this.ticketsDayCategory.homologacao, this.ticketsDayCategory.licitacao, this.ticketsDayCategory.semCategoria,
            this.ticketsDayCategory.implantacao, this.ticketsDayCategory.solicitacaoServico, this.ticketsDayCategory.solicitacaoTreinamento,
            this.ticketsDayCategory.treinamentoOnline, this.ticketsDayCategory.sugestao
          ],
          backgroundColor: [
            '#ffa726',
            '#e4eb6a',
            '#eb0909',
            '#ed9de1',
            '#eda69d',
            '#785a56',
            '#4b6eb8',
            '#86b846',
            '#97e6a3',
            '#fad473',
            '#f5cee1'
          ],
          hoverBackgroundColor: [
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505",
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505",
            "#6067eb",

          ]
        }
      ]
    };
  }

}


