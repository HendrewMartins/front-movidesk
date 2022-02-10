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
  selector: 'app-tickets-seven-status',
  templateUrl: './tickets-seven-status.component.html',
  styleUrls: ['./tickets-seven-status.component.css']
})
export class TicketsSevenStatusComponent implements OnInit {
  @ViewChild('lineStaDay') chartSitDay!: UIChart;
  public items!: any[];
  public displayModal!: boolean;
  public valor!: CategoryOwner[];
  public categoryOwner!: CategoryOwner[];
  public urlServico: string;
  public urlTickets: string;

  //variaveis agentexsituacao 7 dias
  public agenteseven: string[] = [];
  public agenteInAttendanceSeven: number[] = [];
  public agenteNewSeven: number[] = [];
  public agenteStoppedSeven: number[] = [];
  public agenteCanceledSeven: number[] = [];
  public agenteResolvedSeven: number[] = [];
  public agenteClosedSeven: number[] = [];

   //Empilha tickets Agente 7 dias
   public stackedDataAgenteSeven: any;
   public stackedOptionsAgenteSeven: any;

   
  public ticketsSevenAgente!: AgenteTickets[];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsSevenAgente = config.sevenagente!;

    for (let cont = 0; cont < this.ticketsSevenAgente.length; cont++) {
      this.agenteseven.push(this.ticketsSevenAgente[cont].businessName!);
      this.agenteInAttendanceSeven.push(this.ticketsSevenAgente[cont].quantTicketsInAttendance!);
      this.agenteNewSeven.push(this.ticketsSevenAgente[cont].quantTicketsNew!);
      this.agenteStoppedSeven.push(this.ticketsSevenAgente[cont].quantTicketsStopped!);
      this.agenteCanceledSeven.push(this.ticketsSevenAgente[cont].quantTicketsCanceled!);
      this.agenteResolvedSeven.push(this.ticketsSevenAgente[cont].quantTicketsResolved!);
      this.agenteClosedSeven.push(this.ticketsSevenAgente[cont].quantTicketsClosed!);
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
      this.ticketsSevenAgente = registro;
      console.log(registro);
        this.agenteseven.length = 0;
        this.agenteInAttendanceSeven.length = 0;
        this.agenteNewSeven.length = 0;
        this.agenteStoppedSeven.length = 0;
        this.agenteCanceledSeven.length = 0;
        this.agenteResolvedSeven.length = 0;
        this.agenteClosedSeven.length = 0;
      
        for (let cont = 0; cont < this.ticketsSevenAgente.length; cont++) {
          this.agenteseven.push(this.ticketsSevenAgente[cont].businessName!);
          this.agenteInAttendanceSeven.push(this.ticketsSevenAgente[cont].quantTicketsInAttendance!);
          this.agenteNewSeven.push(this.ticketsSevenAgente[cont].quantTicketsNew!);
          this.agenteStoppedSeven.push(this.ticketsSevenAgente[cont].quantTicketsStopped!);
          this.agenteCanceledSeven.push(this.ticketsSevenAgente[cont].quantTicketsCanceled!);
          this.agenteResolvedSeven.push(this.ticketsSevenAgente[cont].quantTicketsResolved!);
          this.agenteClosedSeven.push(this.ticketsSevenAgente[cont].quantTicketsClosed!);
        }

      this.montaGrafico();
      this.chartSitDay.reinit();
      
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });

  }

  public buscarStatusAPI(value: any): Observable<AgenteTickets[]> {
    return this.http.post<AgenteTickets[]>(this.urlTickets + "filterticketsownerseven", value).pipe(map((item: AgenteTickets[]) => {
      return item;
    }));

  }

  public montaGrafico(){
    this.stackedDataAgenteSeven = {
      labels: this.agenteseven,
      datasets: [{
        type: 'bar',
        label: 'Novo',
        backgroundColor: '#42A5F5',
        data: this.agenteNewSeven
      }, {
        type: 'bar',
        label: 'Em Atendimento',
        backgroundColor: '#66BB6A',
        data: this.agenteInAttendanceSeven
      }, {
        type: 'bar',
        label: 'Parado',
        backgroundColor: '#FFA726',
        data: this.agenteStoppedSeven
      }, {
        type: 'bar',
        label: 'Cancelado',
        backgroundColor: "#b80000",
        data: this.agenteCanceledSeven
      }, {
        type: 'bar',
        label: 'Resolvido',
        backgroundColor: '#00ffe5',
        data: this.agenteResolvedSeven
      }, {
        type: 'bar',
        label: 'Fechado',
        backgroundColor: '#e30ebf',
        data: this.agenteClosedSeven
      }]
    };
  
    this.stackedOptionsAgenteSeven = {
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
