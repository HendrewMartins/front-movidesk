import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';
import { TicketsAnos } from '../../graficos/models/TicketsAnos';

@Component({
  selector: 'app-tickets-anos',
  templateUrl: './tickets-anos.component.html',
  styleUrls: ['./tickets-anos.component.css']
})
export class TicketsAnosComponent implements OnInit {
   //tickets anos
   public lineStylesData: any;
   public basicOptions: any;

    //Anos
  public anos: number[] = [];
  public anosQuant: number[] = [];

  public ticketsAnos!: TicketsAnos[];

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsAnos = config.anos!;

    for (let cont = 0; cont < this.ticketsAnos.length; cont++) {
      this.anos.push(this.ticketsAnos[cont].ano!);
      this.anosQuant.push(this.ticketsAnos[cont].quantidade!);
    }

  }

  ngOnInit(): void {
    this.lineStylesData = {
      labels: this.anos,
      datasets: [
          {
              label: 'Tickets',
              data: this.anosQuant,
              fill: true,
              borderColor: '#FFA726',
              tension: .4,
              backgroundColor: 'rgba(255,167,38,0.2)'
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
