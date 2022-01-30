import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsMesesDias } from '../../graficos/models/TicketsMesesDias';

@Component({
  selector: 'app-tickets-seven-category',
  templateUrl: './tickets-seven-category.component.html',
  styleUrls: ['./tickets-seven-category.component.css']
})
export class TicketsSevenCategoryComponent implements OnInit {

  //tickets 7dias
  public lineStylesSevenData: any;

  public basicOptions: any;
  public ticketsDiasCategory!: TicketsMesesDias[];

   //sevendias
   public sevendias: String[] = [];
   public quantsevendias: number[] = [];
   public customizacaosevendias: number[] = [];
   public duvidasevendias: number[] = [];
   public falhasevendias: number[] = [];
   public homologacaosevendias: number[] = [];
   public implantacaosevendias: number[] = [];
   public licitacaosevendias: number[] = [];
   public semCategoriasevendias: number[] = [];
   public solicitacaoServicosevendias: number[] = [];
   public solicitacaoTreinamentosevendias: number[] = [];
   public sugestaosevendias: number[] = [];
   public treinamentoOnlinesevendias: number[] = [];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsDiasCategory = config.sevendaycategory!;

    for (let cont = 0; cont < this.ticketsDiasCategory.length; cont++) {
      this.sevendias.push(this.ticketsDiasCategory[cont].mesesDia!);
      this.quantsevendias.push(this.ticketsDiasCategory[cont].quantidade!);
      this.customizacaosevendias.push(this.ticketsDiasCategory[cont].category?.customizacao!);
      this.duvidasevendias.push(this.ticketsDiasCategory[cont].category?.duvida!);
      this.falhasevendias.push(this.ticketsDiasCategory[cont].category?.falha!);
      this.homologacaosevendias.push(this.ticketsDiasCategory[cont].category?.homologacao!);
      this.implantacaosevendias.push(this.ticketsDiasCategory[cont].category?.implantacao!);
      this.licitacaosevendias.push(this.ticketsDiasCategory[cont].category?.licitacao!);
      this.semCategoriasevendias.push(this.ticketsDiasCategory[cont].category?.semCategoria!);
      this.solicitacaoServicosevendias.push(this.ticketsDiasCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamentosevendias.push(this.ticketsDiasCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestaosevendias.push(this.ticketsDiasCategory[cont].category?.sugestao!);
      this.treinamentoOnlinesevendias.push(this.ticketsDiasCategory[cont].category?.treinamentoOnline!);
    }
  }

  ngOnInit(): void {
    this.lineStylesSevenData = {
      labels: this.sevendias,
      datasets: [
        {
          label: 'Customização',
          data: this.customizacaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#ffa726'
        },
        {
          label: 'Duvida',
          data: this.duvidasevendias,
          fill: false,
          tension: .4,
          borderColor: '#e4eb6a'
        },
        {
          label: 'Falha',
          data: this.falhasevendias,
          fill: false,
          borderColor: '#eb0909',
          tension: .4
        },
        {
          label: 'Homologação',
          data: this.homologacaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#ed9de1'
        },
        {
          label: 'Implantação',
          data: this.implantacaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#4b6eb8'
        },
        {
          label: 'Licitação',
          data: this.licitacaosevendias,
          fill: false,
          borderColor: '#eda69d',
          tension: .4,
        },
        {
          label: 'Sem Categoria',
          data: this.semCategoriasevendias,
          fill: false,
          tension: .4,
          borderColor: '#785a56'
        },
        {
          label: 'Solicitação Serviço',
          data: this.solicitacaoServicosevendias,
          fill: false,
          tension: .4,
          borderColor: '#86b846'
        },
        {
          label: 'Solicitação de Treinamento',
          data: this.solicitacaoTreinamentosevendias,
          fill: false,
          borderColor: '#97e6a3',
          tension: .4,
        },
        {
          label: 'Sugestão',
          data: this.sugestaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#f5cee1'
        },
        {
          label: 'Treinamento Online',
          data: this.treinamentoOnlinesevendias,
          fill: false,
          tension: .4,
          borderColor: '#fad473'
        },
        {
          label: 'Total Por Dia',
          data: this.quantsevendias,
          fill: false,
          borderDash: [5, 5],
          borderColor: '#FFA726',
          tension: .4,
  
      }
      ]
    };
  }

}
