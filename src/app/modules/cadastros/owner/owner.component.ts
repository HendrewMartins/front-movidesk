import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OwnerService } from 'src/app/services/owner.service';
import { environment } from 'src/environments/environment';
import { CategoryOwner } from '../categoryowner/models/categoryowner';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css'],
  providers: [OwnerService]
})
export class OwnerComponent implements OnInit {

  public form!: FormGroup;
  public carregar: boolean = true;
  public pesquisaCar: boolean = true;
  private subscription!: Subscription;

  public listaCategoria: CategoryOwner[] = [];
  public urlServico: string;

  constructor(private fb: FormBuilder,
    public service: OwnerService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router) {
    this.criarForm();
    this.urlServico = environment.api + '/api/controllercategory/desc';
  }
  ngOnInit(): void {

    this.subscription = this.route.data.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const dados = params;
      console.log(dados.pathApi);
      if (dados.pathApi === 'owner') {

        this.pesquisaCar = true;
        this.router.navigate(['pesquisa'], { relativeTo: this.route.parent });
      } else {
        this.pesquisaCar = false;
        this.carregar = false;
      }
    });
  }

  public criarForm(): void {
    // tslint:disable-next-line: max-line-length
    this.form = this.fb.group({
      personType: [null, Validators.compose([
      ])],
      profileType: [null, Validators.compose([
      ])],
      businessName: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(400)
      ])],
      email: [null, Validators.compose([
        Validators.maxLength(200)
      ])],
      phone: [null, Validators.compose([
        Validators.maxLength(100)
      ])],
      pathPicture: [null, Validators.compose([
        Validators.maxLength(100)
      ])],
      categoryOwner: [null, Validators.compose([
      ])],
    });
  }

  public get personType() {
    return this.form.get('personType') as FormGroup;
  }

  public get profileType() {
    return this.form.get('profileType') as FormGroup;
  }

  public get businessName() {
    return this.form.get('businessName') as FormGroup;
  }

  public get email() {
    return this.form.get('email') as FormGroup;
  }

  public get phone() {
    return this.form.get('phone') as FormGroup;
  }

  public get pathPicture() {
    return this.form.get('pathPicture') as FormGroup;
  }

  public get categoryOwner() {
    return this.form.get('categoryOwner') as FormGroup;
  }

  public filtroCategory(event: any) {
    let valor = event.query;
    this.buscarCategory(valor);
  }

  private buscarCategory(value: any) {
    // tslint:disable-next-line: deprecation
    this.buscarTodosAlunos(value).subscribe((registro: CategoryOwner[]) => {
      this.listaCategoria = registro;
      console.log(registro);
    }, (error: any) => {
      console.error(error);
      alert('Deu Erro na hora de Carregar Totos os itens');
    });
  }

  public buscarTodosAlunos(value: any): Observable<CategoryOwner[]> {
    return this.http.get<CategoryOwner[]>(this.urlServico + '/' + value).pipe(map((item: CategoryOwner[]) => {
      return item;
    }));

  }

}
