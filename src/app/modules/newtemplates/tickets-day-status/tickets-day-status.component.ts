import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UIChart } from 'primeng/chart';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoryOwner } from '../../cadastros/categoryowner/models/categoryowner';
import { AgenteTickets } from '../../graficos/models/agenteTickets';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-day-status',
  templateUrl: './tickets-day-status.component.html',
  styleUrls: ['./tickets-day-status.component.css']
})
export class TicketsDayStatusComponent implements OnInit {
  @ViewChild('lineStaDay') chartSitDay!: UIChart;
  public items!: any[];
  public displayModal!: boolean;
  public valor!: CategoryOwner[];
  public categoryOwner!: CategoryOwner[];
  public urlServico: string;
  public urlTickets: string;

  //variaveis agentexsituacao 7 dias
  public agenteDay: string[] = [];
  public agenteInAttendanceDay: number[] = [];
  public agenteNewDay: number[] = [];
  public agenteStoppedDay: number[] = [];
  public agenteCanceledDay: number[] = [];
  public agenteResolvedDay: number[] = [];
  public agenteClosedDay: number[] = [];

  //Empilha tickets Agente 7 dias
  public stackedDataAgenteDay: any;
  public stackedOptionsAgenteDay: any;


  public ticketsDayAgente!: AgenteTickets[];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsDayAgente = config.dayagente!;

    for (let cont = 0; cont < this.ticketsDayAgente.length; cont++) {
      this.agenteDay.push(this.ticketsDayAgente[cont].businessName!);
      this.agenteInAttendanceDay.push(this.ticketsDayAgente[cont].quantTicketsInAttendance!);
      this.agenteNewDay.push(this.ticketsDayAgente[cont].quantTicketsNew!);
      this.agenteStoppedDay.push(this.ticketsDayAgente[cont].quantTicketsStopped!);
      this.agenteCanceledDay.push(this.ticketsDayAgente[cont].quantTicketsCanceled!);
      this.agenteResolvedDay.push(this.ticketsDayAgente[cont].quantTicketsResolved!);
      this.agenteClosedDay.push(this.ticketsDayAgente[cont].quantTicketsClosed!);
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
    this.buscarStatusAPI(value).subscribe((registro: AgenteTickets[]) => {
      this.ticketsDayAgente = registro;
      console.log(registro);
        this.agenteDay.length = 0;
        this.agenteInAttendanceDay.length = 0;
        this.agenteNewDay.length = 0;
        this.agenteStoppedDay.length = 0;
        this.agenteCanceledDay.length = 0;
        this.agenteResolvedDay.length = 0;
        this.agenteClosedDay.length = 0;
      
      for (let cont = 0; cont < this.ticketsDayAgente.length; cont++) {
        this.agenteDay.push(this.ticketsDayAgente[cont].businessName!);
        this.agenteInAttendanceDay.push(this.ticketsDayAgente[cont].quantTicketsInAttendance!);
        this.agenteNewDay.push(this.ticketsDayAgente[cont].quantTicketsNew!);
        this.agenteStoppedDay.push(this.ticketsDayAgente[cont].quantTicketsStopped!);
        this.agenteCanceledDay.push(this.ticketsDayAgente[cont].quantTicketsCanceled!);
        this.agenteResolvedDay.push(this.ticketsDayAgente[cont].quantTicketsResolved!);
        this.agenteClosedDay.push(this.ticketsDayAgente[cont].quantTicketsClosed!);
      }

      this.montaGrafico();
      this.chartSitDay.reinit();
      
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

  }

  public buscarStatusAPI(value: any): Observable<AgenteTickets[]> {
    return this.http.post<AgenteTickets[]>(this.urlTickets + "filterticketsownerday", value).pipe(map((item: AgenteTickets[]) => {
      return item;
    }));

  }

  public montaGrafico(){
    this.stackedDataAgenteDay = {
      labels: this.agenteDay,
      datasets: [{
        type: 'bar',
        label: 'Novo',
        backgroundColor: '#42A5F5',
        data: this.agenteNewDay
      }, {
        type: 'bar',
        label: 'Em Atendimento',
        backgroundColor: '#66BB6A',
        data: this.agenteInAttendanceDay
      }, {
        type: 'bar',
        label: 'Parado',
        backgroundColor: '#FFA726',
        data: this.agenteStoppedDay
      }, {
        type: 'bar',
        label: 'Cancelado',
        backgroundColor: "#b80000",
        data: this.agenteCanceledDay
      }, {
        type: 'bar',
        label: 'Resolvido',
        backgroundColor: '#00ffe5',
        data: this.agenteResolvedDay
      }, {
        type: 'bar',
        label: 'Fechado',
        backgroundColor: '#e30ebf',
        data: this.agenteClosedDay
      }]
    };

    this.stackedOptionsAgenteDay = {
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
}

