import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsMesesDias } from '../../graficos/models/TicketsMesesDias';

@Component({
  selector: 'app-tickets-meses-category',
  templateUrl: './tickets-meses-category.component.html',
  styleUrls: ['./tickets-meses-category.component.css']
})
export class TicketsMesesCategoryComponent implements OnInit {

  //tickets meses
  public lineStylesMesesData: any;
  public basicOptions: any;

  //meses
  public meses: String[] = [];
  public quantmeses: number[] = [];
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

  public ticketsMesesCategory!: TicketsMesesDias[];


  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsMesesCategory = config.mesescategory!;

    for (let cont = 0; cont < this.ticketsMesesCategory.length; cont++) {
      this.meses.push(this.ticketsMesesCategory[cont].mesesDia!);
      this.quantmeses.push(this.ticketsMesesCategory[cont].quantidade!);
      this.customizacao.push(this.ticketsMesesCategory[cont].category?.customizacao!);
      this.duvida.push(this.ticketsMesesCategory[cont].category?.duvida!);
      this.falha.push(this.ticketsMesesCategory[cont].category?.falha!);
      this.homologacao.push(this.ticketsMesesCategory[cont].category?.homologacao!);
      this.implantacao.push(this.ticketsMesesCategory[cont].category?.implantacao!);
      this.licitacao.push(this.ticketsMesesCategory[cont].category?.licitacao!);
      this.semCategoria.push(this.ticketsMesesCategory[cont].category?.semCategoria!);
      this.solicitacaoServico.push(this.ticketsMesesCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamento.push(this.ticketsMesesCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestao.push(this.ticketsMesesCategory[cont].category?.sugestao!);
      this.treinamentoOnline.push(this.ticketsMesesCategory[cont].category?.treinamentoOnline!);

    }
  }

  ngOnInit(): void {

    this.lineStylesMesesData = {
      labels: this.meses,
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
        },
        {
          label: 'Total Por Mês',
          data: this.quantmeses,
          fill: false,
          borderDash: [5, 5],
          borderColor: '#FFA726',
          tension: .4,
  
      }
      ]
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
