import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteCategory } from '../../graficos/models/agenteCategory';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-category',
  templateUrl: './tickets-category.component.html',
  styleUrls: ['./tickets-category.component.css']
})
export class TicketsCategoryComponent implements OnInit {

  public stackedDataCategory: any;
  public stackedOptionsCategory: any;

  public ticketsAgenteCategory!: AgenteCategory[];

  public agenteCategory: string[] = [];
  public agenteCustomizacao: number[] = [];
  public agenteDuvida: number[] = [];
  public agenteFalha: number[] = [];
  public agenteHomologacao: number[] = [];
  public agenteImplantacao: number[] = [];
  public agenteLicitacao: number[] = [];
  public agenteSemCategoria: number[] = [];
  public agenteServico: number[] = [];
  public agenteTreinamento: number[] = [];
  public agenteSugestao: number[] = [];
  public agenteTreinamentoOnline: number[] = [];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsAgenteCategory = config.agenteCategory!;


    for (let cont = 0; cont < this.ticketsAgenteCategory.length; cont++) {
      this.agenteCategory.push(this.ticketsAgenteCategory[cont].businessName!);
      this.agenteCustomizacao.push(this.ticketsAgenteCategory[cont].customizacao!);
      this.agenteDuvida.push(this.ticketsAgenteCategory[cont].duvida!);
      this.agenteFalha.push(this.ticketsAgenteCategory[cont].falha!);
      this.agenteHomologacao.push(this.ticketsAgenteCategory[cont].homologacao!);
      this.agenteImplantacao.push(this.ticketsAgenteCategory[cont].implantacao!);
      this.agenteLicitacao.push(this.ticketsAgenteCategory[cont].licitacao!);
      this.agenteSemCategoria.push(this.ticketsAgenteCategory[cont].semCategoria!);
      this.agenteServico.push(this.ticketsAgenteCategory[cont].solicitacaoServico!);
      this.agenteSugestao.push(this.ticketsAgenteCategory[cont].sugestao!);
      this.agenteTreinamento.push(this.ticketsAgenteCategory[cont].solicitacaoTreinamento!);
      this.agenteTreinamentoOnline.push(this.ticketsAgenteCategory[cont].treinamentoOnline!);
    }

    console.log(config.registros);
  }

  ngOnInit(): void {

    this.stackedDataCategory = {
      labels: this.agenteCategory,
      datasets: [{
        type: 'bar',
        label: 'Customização',
        backgroundColor: '#ffa726',
        data: this.agenteCustomizacao
      }, {
        type: 'bar',
        label: 'Dúvida',
        backgroundColor: '#e4eb6a',
        data: this.agenteDuvida
      },
      {
        type: 'bar',
        label: 'Falha',
        backgroundColor: '#eb0909',
        data: this.agenteFalha
      },
      {
        type: 'bar',
        label: 'Homologação',
        backgroundColor: '#ed9de1',
        data: this.agenteHomologacao
      },
      {
        type: 'bar',
        label: 'Licitação',
        backgroundColor: '#eda69d',
        data: this.agenteLicitacao
      },
      {
        type: 'bar',
        label: 'Sem Categoria',
        backgroundColor: '#785a56',
        data: this.agenteSemCategoria
      },
      {
        type: 'bar',
        label: 'Implantação',
        backgroundColor: '#4b6eb8',
        data: this.agenteImplantacao
      },
      {
        type: 'bar',
        label: 'Solicitação Serviço',
        backgroundColor: '#86b846',
        data: this.agenteServico
      },
      {
        type: 'bar',
        label: 'Treinamento',
        backgroundColor: '#97e6a3',
        data: this.agenteTreinamento
      },
      {
        type: 'bar',
        label: 'Treinamento Online',
        backgroundColor: '#fad473',
        data: this.agenteTreinamentoOnline
      }, {
        type: 'bar',
        label: 'Sugestão',
        backgroundColor: '#f5cee1',
        data: this.agenteSugestao
      }]
    };

    this.stackedOptionsCategory = {
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
  }

  //atualiza a pagina a cada 15 minutos
  public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['loading'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }
}
