import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteTickets } from '../../graficos/models/agenteTickets';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-day-status',
  templateUrl: './tickets-day-status.component.html',
  styleUrls: ['./tickets-day-status.component.css']
})
export class TicketsDayStatusComponent implements OnInit {
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

  }

  ngOnInit(): void {

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

