import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteTickets } from '../../graficos/models/agenteTickets';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-seven-status',
  templateUrl: './tickets-seven-status.component.html',
  styleUrls: ['./tickets-seven-status.component.css']
})
export class TicketsSevenStatusComponent implements OnInit {
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
    
   }

  ngOnInit(): void {

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
