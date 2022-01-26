import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenteJustification } from '../../graficos/models/agenteJustification';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-justification',
  templateUrl: './tickets-justification.component.html',
  styleUrls: ['./tickets-justification.component.css']
})
export class TicketsJustificationComponent implements OnInit {

    //Empilha tickets por Agente x Justification
    public stackedDataJustification: any;
    public stackedOptionsJustification: any;

    public ticketsAgenteJustification!: AgenteJustification[];

    //variaveis agentexjustificativa
  public agenteJustification: string[] = [];
  public agenteparalisado: number[] = [];
  public agentesemjustification: number[] = [];
  public agenteaguarDesenv: number[] = [];
  public agenteemAnalise: number[] = [];
  public agenteaguardEscla: number[] = [];
  public agenteresponClien: number[] = [];
  public agenteemVerificacao: number[] = [];
  public agentetreinaAgendad: number[] = [];
  public agenteaprovado: number[] = [];
  public agenteemValidSupor: number[] = [];
  public agenteaguardAtualiz: number[] = [];
  public agenteaguardAprovac: number[] = [];
  public agenteaguardInfra: number[] = [];
  public agenteaguardAnalis: number[] = [];
  public agenteemTestes: number[] = [];
  public agenteaguardImpacto: number[] = [];
  public agenteaguardEnVersao: number[] = [];
  public agenteimpaAvaliado: number[] = [];
  public agenteaguardOrcament: number[] = [];
  public agenteemVerificaInter: number[] = [];
  public agenteaguardCompilac: number[] = [];
  public agenteemDesenvolviment: number[] = [];
  public agenteaguardFaturame: number[] = [];
  public agenteaguardInfParCli: number[] = [];
  public agentedesenvolvido: number[] = [];
  public agenteaguarAprovPreAnali: number[] = [];
  public agenteaguarEsclaSup: number[] = [];
  public agenteaguarValidParc: number[] = [];
  public agenteagendVistTecn: number[] = [];
  public agentepreAnalAprov: number[] = [];
  public agenteenvAnalise: number[] = [];
  public agenteaguarRetClien: number[] = [];


  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) {
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsAgenteJustification = config.agenteJustification!;

    for (let cont = 0; cont < this.ticketsAgenteJustification.length; cont++) {
      this.agenteJustification.push(this.ticketsAgenteJustification[cont].businessName!);
      this.agenteparalisado.push(this.ticketsAgenteJustification[cont].paralisado!);
      this.agentesemjustification.push(this.ticketsAgenteJustification[cont].semjustification!);
      this.agenteaguarDesenv.push(this.ticketsAgenteJustification[cont].aguarDesenv!);
      this.agenteemAnalise.push(this.ticketsAgenteJustification[cont].emAnalise!);
      this.agenteaguardEscla.push(this.ticketsAgenteJustification[cont].aguardEscla!);
      this.agenteresponClien.push(this.ticketsAgenteJustification[cont].responClien!);
      this.agenteemVerificacao.push(this.ticketsAgenteJustification[cont].emVerificacao!);
      this.agentetreinaAgendad.push(this.ticketsAgenteJustification[cont].treinaAgendad!);
      this.agenteaprovado.push(this.ticketsAgenteJustification[cont].aprovado!);
      this.agenteemValidSupor.push(this.ticketsAgenteJustification[cont].emValidSupor!);
      this.agenteaguardAtualiz.push(this.ticketsAgenteJustification[cont].aguardAtualiz!);
      this.agenteaguardAprovac.push(this.ticketsAgenteJustification[cont].aguardAprovac!);
      this.agenteaguardInfra.push(this.ticketsAgenteJustification[cont].aguardInfra!);
      this.agenteaguardAnalis.push(this.ticketsAgenteJustification[cont].aguardAnalis!);
      this.agenteemTestes.push(this.ticketsAgenteJustification[cont].emTestes!);
      this.agenteaguardImpacto.push(this.ticketsAgenteJustification[cont].aguardImpacto!);
      this.agenteaguardEnVersao.push(this.ticketsAgenteJustification[cont].aguardEnVersao!);
      this.agenteimpaAvaliado.push(this.ticketsAgenteJustification[cont].impaAvaliado!);
      this.agenteaguardOrcament.push(this.ticketsAgenteJustification[cont].aguardOrcament!);
      this.agenteemVerificaInter.push(this.ticketsAgenteJustification[cont].emVerificaInter!);
      this.agenteaguardCompilac.push(this.ticketsAgenteJustification[cont].aguardCompilac!);
      this.agenteemDesenvolviment.push(this.ticketsAgenteJustification[cont].emDesenvolviment!);
      this.agenteaguardFaturame.push(this.ticketsAgenteJustification[cont].aguardFaturame!);
      this.agenteaguardInfParCli.push(this.ticketsAgenteJustification[cont].aguardInfParCli!);
      this.agentedesenvolvido.push(this.ticketsAgenteJustification[cont].desenvolvido!);
      this.agenteaguarAprovPreAnali.push(this.ticketsAgenteJustification[cont].aguarAprovPreAnali!);
      this.agenteaguarEsclaSup.push(this.ticketsAgenteJustification[cont].aguarEsclaSup!);
      this.agenteaguarValidParc.push(this.ticketsAgenteJustification[cont].aguarValidParc!);
      this.agenteagendVistTecn.push(this.ticketsAgenteJustification[cont].agendVistTecn!);
      this.agentepreAnalAprov.push(this.ticketsAgenteJustification[cont].preAnalAprov!);
      this.agenteenvAnalise.push(this.ticketsAgenteJustification[cont].envAnalise!);
      this.agenteaguarRetClien.push(this.ticketsAgenteJustification[cont].aguarRetClien!);
    }
   }

  ngOnInit(): void {
    this.stackedDataJustification = {
      labels: this.agenteJustification,
      datasets: [{
        type: 'bar',
        label: 'Paralisado',
        backgroundColor: "#f2993f",
        data: this.agenteparalisado
      }, {
        type: 'bar',
        label: 'Sem Justificativa',
        backgroundColor:  "#ed714e",
        data: this.agentesemjustification
      },
      {
        type: 'bar',
        label: 'Aguardando Desenvolvimento',
        backgroundColor:  "#5bde79",
        data: this.agenteaguarDesenv
      },

      {
        type: 'bar',
        label: 'Em Analise',
        backgroundColor:"#2eb04c",
        data: this.agenteemAnalise
      },
      {
        type: 'bar',
        label: 'Aguardando Esclarecimentos',
        backgroundColor: "#eb81d2",
        data: this.agenteaguardEscla
      },
      {
        type: 'bar',
        label: 'Respondido pelo Cliente',
        backgroundColor: "#73057d",
        data: this.agenteresponClien
      },
      {
        type: 'bar',
        label: 'Em Verificação',
        backgroundColor: "#e0313d",
        data: this.agenteemVerificacao
      },
      
      {
        type: 'bar',
        label: ' Treinamento Agendado',
        backgroundColor: "#fff200",
        data: this.agentetreinaAgendad
      },
      {
        type: 'bar',
        label: 'Aprovado',
        backgroundColor: "#057a17",
        data: this.agenteaprovado
      },
      {
        type: 'bar',
        label: 'Em Validação com Suporte',
        backgroundColor: "#5c9e97",
        data: this.agenteemValidSupor
      }, 
      {
        type: 'bar',
        label: 'Aguardando Atualização',
        backgroundColor:"#c25211", 
        data: this.agenteaguardAtualiz
      }, 
      {
        type: 'bar',
        label: 'Aguardando Aprovação',
        backgroundColor:"#7d0202", 
        data: this.agenteaguardAprovac
      }, 
      {
        type: 'bar',
        label: 'Aguardando Infraestrutura',
        backgroundColor: "#4a2e2e",
        data: this.agenteaguardInfra
      }, 
      {
        type: 'bar',
        label: 'Aguardando Analise',
        backgroundColor: "#fc590d",
        data: this.agenteaguardAnalis
      }, 
      {
        type: 'bar',
        label: 'Em testes',
        backgroundColor:"#05ff82",
        data: this.agenteemTestes
      }, 
      {
        type: 'bar',
        label: 'Aguardando Analise de impacto',
        backgroundColor:"#cc021a", 
        data: this.agenteaguardImpacto
      }, 
      {
        type: 'bar',
        label: 'Aguardando encaixe em Versão',
        backgroundColor: "#166380",
        data: this.agenteaguardEnVersao
      }, 
      {
        type: 'bar',
        label: 'Impacto avaliado',
        backgroundColor:"#224f13", 
        data: this.agenteimpaAvaliado
      }, 
      {
        type: 'bar',
        label: 'Aguardando Orçamento',
        backgroundColor: "#eda51f",
        data: this.agenteaguardOrcament
      }, 
      {
        type: 'bar',
        label: 'Em Verificação com equipe interna',
        backgroundColor: "#540000",
        data: this.agenteemVerificaInter
      }, 
      {
        type: 'bar',
        label: 'Aguardando Compilação',
        backgroundColor:"#607002", 
        data: this.agenteaguardCompilac
      }, 
      {
        type: 'bar',
        label: 'Em Desenvolvimento',
        backgroundColor:"#07c1f5", 
        data: this.agenteemDesenvolviment
      }, 
      {
        type: 'bar',
        label: 'Aguardando Faturamento',
        backgroundColor: "#c607db",
        data: this.agenteaguardFaturame
      }, 
      {
        type: 'bar',
        label: 'Aguardando Informações de Clientes e Parceiros',
        backgroundColor: "#db075f",
        data: this.agenteaguardInfParCli
      }, 
      {
        type: 'bar',
        label: 'Desenvolvido',
        backgroundColor:"#13024d", 
        data: this.agentedesenvolvido
      }, 
      {
        type: 'bar',
        label: 'Aguardando aprovação da pré analise',
        backgroundColor: "#a9c9c3", 
        data: this.agenteaguarAprovPreAnali
      }, 
      {
        type: 'bar',
        label: 'Aguardando Esclarecimentos do Suporte',
        backgroundColor: "#2b1127", 
        data: this.agenteaguarEsclaSup
      }, 
      {
        type: 'bar',
        label: 'Aguardando validação de parceiro/IDS',
        backgroundColor: "#ff0000",
        data: this.agenteaguarValidParc
      }, 
      {
        type: 'bar',
        label: 'Agendada Visita Técnica',
        backgroundColor: "#5c5b50", 
        data: this.agenteagendVistTecn
      }, 
      {
        type: 'bar',
        label: 'Pré analise aprovada',
        backgroundColor:  "#0059ff",
        data: this.agentepreAnalAprov
      }, 
      {
        type: 'bar',
        label: 'Enviado para analise',
        backgroundColor: "#00e308",
        data: this.agenteenvAnalise
      }, 
      {
        type: 'bar',
        label: 'Aguardando retorno do Cliente',
        backgroundColor: "#d0ff00", 
        data: this.agenteaguarRetClien
      }]
    };

    this.stackedOptionsJustification = {
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
