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
  selector: 'app-tickets-day-category',
  templateUrl: './tickets-day-category.component.html',
  styleUrls: ['./tickets-day-category.component.css']
})
export class TicketsDayCategoryComponent implements OnInit {

  @ViewChild('lineStaDay') chartSitDay!: UIChart;
  public items!: any[];
  public displayModal!: boolean;
  public valor!: CategoryOwner[];
  public categoryOwner!: CategoryOwner[];
  public urlServico: string;
  public urlTickets: string;

  //tickets dia atual
  public lineStylesDayData: any;

  public basicOptions: any;
  public ticketsDayDiasCategory!: TicketsMesesDias[];

  //daydias
  public daydias: String[] = [];
  public quantdaydias: number[] = [];
  public customizacaodaydias: number[] = [];
  public duvidadaydias: number[] = [];
  public falhadaydias: number[] = [];
  public homologacaodaydias: number[] = [];
  public implantacaodaydias: number[] = [];
  public licitacaodaydias: number[] = [];
  public semCategoriadaydias: number[] = [];
  public solicitacaoServicodaydias: number[] = [];
  public solicitacaoTreinamentodaydias: number[] = [];
  public sugestaodaydias: number[] = [];
  public treinamentoOnlinedaydias: number[] = [];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsDayDiasCategory = config.daydaycategory!;


    for (let cont = 0; cont < this.ticketsDayDiasCategory.length; cont++) {
      this.daydias.push(this.ticketsDayDiasCategory[cont].mesesDia!);
      this.quantdaydias.push(this.ticketsDayDiasCategory[cont].quantidade!);
      this.customizacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.customizacao!);
      this.duvidadaydias.push(this.ticketsDayDiasCategory[cont].category?.duvida!);
      this.falhadaydias.push(this.ticketsDayDiasCategory[cont].category?.falha!);
      this.homologacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.homologacao!);
      this.implantacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.implantacao!);
      this.licitacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.licitacao!);
      this.semCategoriadaydias.push(this.ticketsDayDiasCategory[cont].category?.semCategoria!);
      this.solicitacaoServicodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamentodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestaodaydias.push(this.ticketsDayDiasCategory[cont].category?.sugestao!);
      this.treinamentoOnlinedaydias.push(this.ticketsDayDiasCategory[cont].category?.treinamentoOnline!);
    }

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
      this.ticketsDayDiasCategory = registro;
      console.log(registro);
        
        this.daydias.length = 0;
          this.quantdaydias.length = 0;
          this.customizacaodaydias.length = 0;
          this.duvidadaydias.length = 0;
          this.falhadaydias.length = 0;
          this.homologacaodaydias.length = 0;
          this.implantacaodaydias.length = 0;
          this.licitacaodaydias.length = 0;
          this.semCategoriadaydias.length = 0;
          this.solicitacaoServicodaydias.length = 0;
          this.solicitacaoTreinamentodaydias.length = 0;
          this.sugestaodaydias.length = 0;
          this.treinamentoOnlinedaydias.length = 0;
      
        for (let cont = 0; cont < this.ticketsDayDiasCategory.length; cont++) {
          this.daydias.push(this.ticketsDayDiasCategory[cont].mesesDia!);
          this.quantdaydias.push(this.ticketsDayDiasCategory[cont].quantidade!);
          this.customizacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.customizacao!);
          this.duvidadaydias.push(this.ticketsDayDiasCategory[cont].category?.duvida!);
          this.falhadaydias.push(this.ticketsDayDiasCategory[cont].category?.falha!);
          this.homologacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.homologacao!);
          this.implantacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.implantacao!);
          this.licitacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.licitacao!);
          this.semCategoriadaydias.push(this.ticketsDayDiasCategory[cont].category?.semCategoria!);
          this.solicitacaoServicodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoServico!);
          this.solicitacaoTreinamentodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoTreinamento!);
          this.sugestaodaydias.push(this.ticketsDayDiasCategory[cont].category?.sugestao!);
          this.treinamentoOnlinedaydias.push(this.ticketsDayDiasCategory[cont].category?.treinamentoOnline!);
        }

      this.montaGrafico();
      this.chartSitDay.reinit();
      
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

  }

  public buscarStatusAPI(value: any): Observable<TicketsMesesDias[]> {
    return this.http.post<TicketsMesesDias[]>(this.urlTickets + "filterdaydaycategory", value).pipe(map((item: TicketsMesesDias[]) => {
      return item;
    }));

  }



  public montaGrafico() {
    this.lineStylesDayData = {
      labels: this.daydias,
      datasets: [
        {
          label: 'Customização',
          data: this.customizacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#ffa726'
        },
        {
          label: 'Duvida',
          data: this.duvidadaydias,
          fill: false,
          tension: .4,
          borderColor: '#e4eb6a'
        },
        {
          label: 'Falha',
          data: this.falhadaydias,
          fill: false,
          borderColor: '#eb0909',
          tension: .4
        },
        {
          label: 'Homologação',
          data: this.homologacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#ed9de1'
        },
        {
          label: 'Implantação',
          data: this.implantacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#4b6eb8'
        },
        {
          label: 'Licitação',
          data: this.licitacaodaydias,
          fill: false,
          borderColor: '#eda69d',
          tension: .4,
        },
        {
          label: 'Sem Categoria',
          data: this.semCategoriadaydias,
          fill: false,
          tension: .4,
          borderColor: '#785a56'
        },
        {
          label: 'Solicitação Serviço',
          data: this.solicitacaoServicodaydias,
          fill: false,
          tension: .4,
          borderColor: '#86b846'
        },
        {
          label: 'Solicitação de Treinamento',
          data: this.solicitacaoTreinamentodaydias,
          fill: false,
          borderColor: '#97e6a3',
          tension: .4,
        },
        {
          label: 'Sugestão',
          data: this.sugestaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#f5cee1'
        },
        {
          label: 'Treinamento Online',
          data: this.treinamentoOnlinedaydias,
          fill: false,
          tension: .4,
          borderColor: '#fad473'
        },
        {
          label: 'Total Por Dia',
          data: this.quantdaydias,
          fill: false,
          borderDash: [5, 5],
          borderColor: '#FFA726',
          tension: .4,

        }
      ]
    };
  }
}

