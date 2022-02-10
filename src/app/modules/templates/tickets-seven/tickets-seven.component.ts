import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UIChart } from 'primeng/chart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryOwner } from '../../cadastros/categoryowner/models/categoryowner';
import { Category } from '../../graficos/models/category';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsSituacao } from '../../graficos/models/ticketsSituacao';
import { TicketsUrgency } from '../../graficos/models/ticketsUrgencia';

@Component({
  selector: 'app-tickets-seven',
  templateUrl: './tickets-seven.component.html',
  styleUrls: ['./tickets-seven.component.css']
})
export class TicketsSevenComponent implements OnInit {

  @ViewChild('lineSitDay') chartSitDay!: UIChart;
  @ViewChild('lineUrgDay') chartUrgDay!: UIChart;
  @ViewChild('lineCatDay') chartCatDay!: UIChart;
  public items!: any[];
  public displayModal!: boolean;
  public valor!: CategoryOwner[];
  public categoryOwner!: CategoryOwner[];
  public urlServico: string;
  public urlTickets: string;

  //tickets por situacao 7 dias
  public dataSitSevenPie: any;
  public chartOptionsSitSevenPie: any;

  //tickets por urgencia7 dias
  public dataUrgSevenPie: any;
  public chartOptionsUrgSevenPie: any;

  //tickets por Categoria 7 dias
  public dataCatSevenPie: any;
  public chartOptionsCatSevenPie: any;

  public ticketsSevenSituacao!: TicketsSituacao;
  public ticketsSevenUrgecia!: TicketsUrgency;
  public ticketsSevenCategory!: Category;
  constructor(public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,) {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsSevenSituacao = config.sevensituacao!;
    this.ticketsSevenUrgecia = config.sevenurgency!;
    this.ticketsSevenCategory = config.sevencategory!;
    this.urlServico = environment.api + '/api/controllercategory';
    this.urlTickets = environment.api + '/api/tickets/';
  }

  ngOnInit(): void {

    this.buscarCategory();
    this.items = [
      {
        label: 'Opções',
        items: [{
          label: 'Filtros',
          icon: 'pi pi-external-link',
          command: () => {
            this.showModalDialog();
          }
        }
        ]
      }
    ];

    this.geraGraficoSit();
    this.geraGraficoUrg();
    this.geraGraficoCat();
  }

  public showModalDialog() {
    this.displayModal = true;
  }

  private buscarCategory() {
    // tslint:disable-next-line: deprecation
    this.buscarTodasCategorias().subscribe((registro: CategoryOwner[]) => {
      this.categoryOwner = registro;
      this.valor = this.categoryOwner;
      console.log(registro);
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });
  }

  public buscarTodasCategorias(): Observable<CategoryOwner[]> {
    return this.http.get<CategoryOwner[]>(this.urlServico).pipe(map((item: CategoryOwner[]) => {
      return item;
    }));

  }

  public carregarGraficos() {
    console.log(this.valor);
    this.buscarDados(this.valor);

  }

  private buscarDados(value: any) {
    // tslint:disable-next-line: deprecation
    this.buscarStatusSitAPI(value).subscribe((registro: TicketsSituacao) => {
      this.ticketsSevenSituacao = registro;
      this.geraGraficoSit();
      this.chartSitDay.reinit();
      console.log(registro);
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

    this.buscarStatusCatAPI(value).subscribe((registro: Category) => {
      this.ticketsSevenCategory = registro;
      this.geraGraficoCat();
      this.chartCatDay.reinit();
      console.log(registro);
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

    this.buscarStatusUrgAPI(value).subscribe((registro: TicketsUrgency) => {
      this.ticketsSevenUrgecia = registro;
      this.geraGraficoUrg();
      this.chartSitDay.reinit();
      console.log(registro);
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });
  }

  public buscarStatusSitAPI(value: any): Observable<TicketsSituacao> {
    return this.http.post<TicketsSituacao>(this.urlTickets + "filterstatussevensum", value).pipe(map((item: TicketsSituacao) => {
      return item;
    }));

  }

  public buscarStatusUrgAPI(value: any): Observable<TicketsUrgency> {
    return this.http.post<TicketsUrgency>(this.urlTickets + "filterurgencysevensum", value).pipe(map((item: TicketsUrgency) => {
      return item;
    }));

  }

  public buscarStatusCatAPI(value: any): Observable<Category> {
    return this.http.post<Category>(this.urlTickets + "filtersevencategory", value).pipe(map((item: Category) => {
      return item;
    }));

  }

  public geraGraficoSit() {
    this.dataSitSevenPie = {
      labels: ['Novo-' + this.ticketsSevenSituacao.newReg,
      'Em Atend.-' + this.ticketsSevenSituacao.inAttendance,
      'Parado-' + this.ticketsSevenSituacao.stopped,
      'Cancelado-' + this.ticketsSevenSituacao.canceled,
      'Resolvido-' + this.ticketsSevenSituacao.resolved,
      'Fechado-' + this.ticketsSevenSituacao.closed],
      datasets: [
        {
          data: [this.ticketsSevenSituacao.newReg, this.ticketsSevenSituacao.inAttendance,
          this.ticketsSevenSituacao.stopped, this.ticketsSevenSituacao.canceled,
          this.ticketsSevenSituacao.resolved, this.ticketsSevenSituacao.closed],
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
  }

  public geraGraficoUrg() {
    this.dataUrgSevenPie = {
      labels: ['Sem Urgencia-' + this.ticketsSevenUrgecia.nulo,
      'Baixa-' + this.ticketsSevenUrgecia.baixa,
      'Média-' + this.ticketsSevenUrgecia.media,
      'Alta-' + this.ticketsSevenUrgecia.alta,
      'Urgente-' + this.ticketsSevenUrgecia.urgente],
      datasets: [
        {
          data: [this.ticketsSevenUrgecia.nulo, this.ticketsSevenUrgecia.baixa, this.ticketsSevenUrgecia.media,
          this.ticketsSevenUrgecia.alta, this.ticketsSevenUrgecia.urgente],
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
  }

  public geraGraficoCat() {
    this.dataCatSevenPie = {
      labels: ['Customização-' + this.ticketsSevenCategory.customizacao,
      'Dúvida-' + this.ticketsSevenCategory.duvida,
      'Falha-' + this.ticketsSevenCategory.falha,
      'Homologação-' + this.ticketsSevenCategory.homologacao,
      'Licitação-' + this.ticketsSevenCategory.licitacao,
      'Sem Categoria-' + this.ticketsSevenCategory.semCategoria,
      'Implantação-' + this.ticketsSevenCategory.implantacao,
      'Solicitação Serviço-' + this.ticketsSevenCategory.solicitacaoServico,
      'Treinamento-' + this.ticketsSevenCategory.solicitacaoTreinamento,
      'Treinamento Online-' + this.ticketsSevenCategory.treinamentoOnline,
      'Sugestão-' + this.ticketsSevenCategory.sugestao
      ],
      datasets: [
        {
          data: [
            this.ticketsSevenCategory.customizacao, this.ticketsSevenCategory.duvida, this.ticketsSevenCategory.falha,
            this.ticketsSevenCategory.homologacao, this.ticketsSevenCategory.licitacao, this.ticketsSevenCategory.semCategoria,
            this.ticketsSevenCategory.implantacao, this.ticketsSevenCategory.solicitacaoServico, this.ticketsSevenCategory.solicitacaoTreinamento,
            this.ticketsSevenCategory.treinamentoOnline, this.ticketsSevenCategory.sugestao
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
