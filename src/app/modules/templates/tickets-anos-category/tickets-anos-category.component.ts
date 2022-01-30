import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnosCategory } from '../../graficos/models/anosCategory';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-anos-category',
  templateUrl: './tickets-anos-category.component.html',
  styleUrls: ['./tickets-anos-category.component.css']
})
export class TicketsAnosCategoryComponent implements OnInit {

  //tickets anos
  public lineStylesData: any;
  public basicOptions: any;

  //Anos
  public anos: number[] = [];
  public customizacao: number[] = [];
  public duvida: number[] = [];
  public falha: number[] = [];
  public homologacao: number[] = [];
  public implantacao: number[] = [];
  public licitacao: number[] = [];
  public semCategoria: number[] = [];
  public solicitacaoServico: number[] = [];
  public solicitacaoTreinamento: number[] = [];
  public sugestao: number[] = [];
  public treinamentoOnline: number[] = [];

  public ticketsAnosCategory!: AnosCategory[];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsAnosCategory = config.anoscategory!;

    for (let cont = 0; cont < this.ticketsAnosCategory.length; cont++) {
      this.anos.push(this.ticketsAnosCategory[cont].anos!);
      this.customizacao.push(this.ticketsAnosCategory[cont].category?.customizacao!);
      this.duvida.push(this.ticketsAnosCategory[cont].category?.duvida!);
      this.falha.push(this.ticketsAnosCategory[cont].category?.falha!);
      this.homologacao.push(this.ticketsAnosCategory[cont].category?.homologacao!);
      this.implantacao.push(this.ticketsAnosCategory[cont].category?.implantacao!);
      this.licitacao.push(this.ticketsAnosCategory[cont].category?.licitacao!);
      this.semCategoria.push(this.ticketsAnosCategory[cont].category?.semCategoria!);
      this.solicitacaoServico.push(this.ticketsAnosCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamento.push(this.ticketsAnosCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestao.push(this.ticketsAnosCategory[cont].category?.sugestao!);
      this.treinamentoOnline.push(this.ticketsAnosCategory[cont].category?.treinamentoOnline!);

    }
  }

  ngOnInit(): void {
    this.lineStylesData = {
      labels: this.anos,
      datasets: [
        {
          label: 'Customização',
          data: this.customizacao,
          fill: false,
          tension: .4,
          borderColor: '#ffa726'
        },
        {
          label: 'Duvida',
          data: this.duvida,
          fill: false,
          tension: .4,
          borderColor: '#e4eb6a'
        },
        {
          label: 'Falha',
          data: this.falha,
          fill: false,
          borderColor: '#eb0909',
          tension: .4
        },
        {
          label: 'Homologação',
          data: this.homologacao,
          fill: false,
          tension: .4,
          borderColor: '#ed9de1'
        },
        {
          label: 'Implantação',
          data: this.implantacao,
          fill: false,
          tension: .4,
          borderColor: '#4b6eb8'
        },
        {
          label: 'Licitação',
          data: this.licitacao,
          fill: false,
          borderColor: '#eda69d',
          tension: .4,
        },
        {
          label: 'Sem Categoria',
          data: this.semCategoria,
          fill: false,
          tension: .4,
          borderColor: '#785a56'
        },
        {
          label: 'Solicitação Serviço',
          data: this.solicitacaoServico,
          fill: false,
          tension: .4,
          borderColor: '#86b846'
        },
        {
          label: 'Solicitação de Treinamento',
          data: this.solicitacaoTreinamento,
          fill: false,
          borderColor: '#97e6a3',
          tension: .4,
        },
        {
          label: 'Sugestão',
          data: this.sugestao,
          fill: false,
          tension: .4,
          borderColor: '#f5cee1'
        },
        {
          label: 'Treinamento Online',
          data: this.treinamentoOnline,
          fill: false,
          tension: .4,
          borderColor: '#fad473'
        }
      ]
    };
  }

}
