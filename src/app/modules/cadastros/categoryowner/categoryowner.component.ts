import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryOwnerService } from 'src/app/services/categoryowner.service';

@Component({
  selector: 'app-categoryowner',
  templateUrl: './categoryowner.component.html',
  styleUrls: ['./categoryowner.component.css'],
  providers: [CategoryOwnerService]
})
export class CategoryownerComponent implements OnInit {

  public form!: FormGroup;
  public carregar: boolean = true;
  public pesquisaCar: boolean = true;
  private subscription!: Subscription;

  constructor( private fb: FormBuilder,
    public service: CategoryOwnerService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router) { 
      this.criarForm();
    }

  ngOnInit(): void {
    
    this.subscription = this.route.data.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const dados = params;
      console.log(dados.pathApi);
      if (dados.pathApi === 'controllercategory') {

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
      desCategoria: [null, Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ])],
    });
  }

  public get descategoria() {
    return this.form.get('desCategoria') as FormGroup;
  }

  
}
