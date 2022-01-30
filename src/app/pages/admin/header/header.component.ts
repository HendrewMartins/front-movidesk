import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuDataService } from 'src/app/services/menu-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public data: string = "";
  public url!: string;

  constructor(private menuDataService: MenuDataService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router) {
    this.url = environment.api + '/api/atualizacao';
  }

  ngOnInit(): void {
    this.atualizacao();
    this.timeLoading();
  }

  public buscarAtualizacao(): Observable<any> {
    return this.http.get<any>(this.url).pipe(map((item: any) => {
      return item;
    }));

  }

  private atualizacao() {
    // tslint:disable-next-line: deprecation
    this.buscarAtualizacao().subscribe((registro: any) => {
      let tipo = "";
      if(registro.tipoAtualizacao === 0){
        tipo = "Completo";
      } else if(registro.tipoAtualizacao === 1){
        tipo = "Parcial";
      }
      else if(registro.tipoAtualizacao === 2){
        tipo = "Status";
      }

      this.data="Atualizado dia "+registro.dataFimAtualizacao+" as "+registro.horaFimAtualizacao+ ", Tipo "+tipo;
      console.log(registro.dataFimAtualizacao);
      console.log(registro.horaFimAtualizacao);
    }, error => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Atualização');
    });
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  //faz o loading da data e hora de atualizacao
  public timeLoading() {
    setTimeout(() => {
      this.atualizacao();
      this.timeLoading();
    }, 120000);
  }
}
