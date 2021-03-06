import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UIChart } from 'primeng/chart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryOwner } from '../../cadastros/categoryowner/models/categoryowner';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsMesesDias } from '../../graficos/models/TicketsMesesDias';

@Component({
  selector: 'app-tickets-seven-category',
  templateUrl: './tickets-seven-category.component.html',
  styleUrls: ['./tickets-seven-category.component.css']
})
export class TicketsSevenCategoryComponent implements OnInit {

  @ViewChild('lineStaDay') chartSitDay!: UIChart;
  public items!: any[];
  public displayModal!: boolean;
  public valor!: CategoryOwner[];
  public categoryOwner!: CategoryOwner[];
  public urlServico: string;
  public urlTickets: string;

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

    this.urlServico = environment.api + '/api/controllercategory';
    this.urlTickets = environment.api + '/api/tickets/';
  }

  ngOnInit(): void {
    this.buscarCategory();
    this.items = [
      {
        label: 'Op????es',
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
    this.montaGrafico();
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
    this.buscarStatusAPI(value).subscribe((registro: TicketsMesesDias[]) => {
      this.ticketsDiasCategory = registro;
      console.log(registro);


      this.sevendias.length = 0;
      this.quantsevendias.length = 0;
      this.customizacaosevendias.length = 0;
      this.duvidasevendias.length = 0;
      this.falhasevendias.length = 0;
      this.homologacaosevendias.length = 0;
      this.implantacaosevendias.length = 0;
      this.licitacaosevendias.length = 0;
      this.semCategoriasevendias.length = 0;
      this.solicitacaoServicosevendias.length = 0;
      this.solicitacaoTreinamentosevendias.length = 0;
      this.sugestaosevendias.length = 0;
      this.treinamentoOnlinesevendias.length = 0;

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

      this.montaGrafico();
      this.chartSitDay.reinit();

    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

  }

  public buscarStatusAPI(value: any): Observable<TicketsMesesDias[]> {
    return this.http.post<TicketsMesesDias[]>(this.urlTickets + "filtersevendaycategory", value).pipe(map((item: TicketsMesesDias[]) => {
      return item;
    }));

  }


  public montaGrafico() {
    this.lineStylesSevenData = {
      labels: this.sevendias,
      datasets: [
        {
          label: 'Customiza????o',
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
          label: 'Homologa????o',
          data: this.homologacaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#ed9de1'
        },
        {
          label: 'Implanta????o',
          data: this.implantacaosevendias,
          fill: false,
          tension: .4,
          borderColor: '#4b6eb8'
        },
        {
          label: 'Licita????o',
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
          label: 'Solicita????o Servi??o',
          data: this.solicitacaoServicosevendias,
          fill: false,
          tension: .4,
          borderColor: '#86b846'
        },
        {
          label: 'Solicita????o de Treinamento',
          data: this.solicitacaoTreinamentosevendias,
          fill: false,
          borderColor: '#97e6a3',
          tension: .4,
        },
        {
          label: 'Sugest??o',
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
