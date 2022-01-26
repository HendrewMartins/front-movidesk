import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/services/domain/appconfig';
import { environment } from 'src/environments/environment';
import { ResolvedConfig } from './models/resolvedConfig';
import { TicketsSituacao } from './models/ticketsSituacao';
import { TicketsUrgency } from './models/ticketsUrgencia';
import { TicketsType } from './models/ticketsType';
import { AgenteTickets } from './models/agenteTickets';
import { AgenteCategory } from './models/agenteCategory';
import { AgenteJustification } from './models/agenteJustification';
import { Category } from './models/category';
import { Justification } from './models/justification';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit, OnDestroy {
  //Empilha tickets Agente 
  public stackedDataAgente: any;
  public stackedOptionsAgente: any;

  //Empilha tickets por Agente x Category
  public stackedDataCategory: any;
  public stackedOptionsCategory: any;

  //Empilha tickets por Agente x Justification
  public stackedDataJustification: any;
  public stackedOptionsJustification: any;

  public subscription!: Subscription;

  public config!: AppConfig;

  //tickets por situacao
  public dataSituacaoPie: any;
  public chartOptionsSituacaoPie: any;

  //tickets por urgencia
  public dataUrgenciaPie: any;
  public chartOptionsUrgenciaPie: any;

  //tickets por tipo
  public dataTipoPie: any;
  public chartOptionsTipoPie: any;

  //tickets por Categoria
  public dataCategoryPie: any;
  public chartOptionsCategoryPie: any;

  //tickets por Justificativa
  public dataJustificationPie: any;
  public chartJustificationPie: any;

  public urlServe!: string;
  public valida: boolean = true;

  //array para retonro das pesquisas
  public ticketsSituacao!: TicketsSituacao;
  public ticketsUrgecia!: TicketsUrgency;
  public ticketsType!: TicketsType;
  public ticketsCategory!: Category;
  public ticketsJustifation!: Justification;
  public ticketsAgente!: AgenteTickets[];
  public ticketsAgenteCategory!: AgenteCategory[];
  public ticketsAgenteJustification!: AgenteJustification[];

  // controla aba para apresentação
  public tab: number = 0;

  //variaveis agentexsituacao
  public agente: string[] = [];
  public agenteInAttendance: number[] = [];
  public agenteNew: number[] = [];
  public agenteStopped: number[] = [];

  //variaveis agentexcategoria
  public agenteCategory: string[] = [];
  public agenteCustomizacao: number[] = [];
  public agenteDuvida: number[] = [];
  public agenteFalha: number[] = [];
  public agenteHomologacao: number[] = [];
  public agenteImplantacao: number[] = [];
  public agenteLicitacao: number[] = [];
  public agenteSemCategoria: number[] = [];
  public agenteServico: number[] = [];
  public agenteTreinamento: number[] = [];
  public agenteSugestao: number[] = [];
  public agenteTreinamentoOnline: number[] = [];

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
    this.ticketsSituacao = config.registros!;
    this.ticketsUrgecia = config.urgency!;
    this.ticketsType = config.type!;
    this.ticketsAgente = config.agente!;
    this.ticketsAgenteCategory = config.agenteCategory!;
    this.ticketsAgenteJustification = config.agenteJustification!;
    this.ticketsCategory = config.category!;
    this.ticketsJustifation = config.justification!;

    for (let cont = 0; cont < this.ticketsAgente.length; cont++) {
      this.agente.push(this.ticketsAgente[cont].businessName!);
      this.agenteInAttendance.push(this.ticketsAgente[cont].quantTicketsInAttendance!);
      this.agenteNew.push(this.ticketsAgente[cont].quantTicketsNew!);
      this.agenteStopped.push(this.ticketsAgente[cont].quantTicketsStopped!);
    }

    for (let cont = 0; cont < this.ticketsAgenteCategory.length; cont++) {
      this.agenteCategory.push(this.ticketsAgenteCategory[cont].businessName!);
      this.agenteCustomizacao.push(this.ticketsAgenteCategory[cont].customizacao!);
      this.agenteDuvida.push(this.ticketsAgenteCategory[cont].duvida!);
      this.agenteFalha.push(this.ticketsAgenteCategory[cont].falha!);
      this.agenteHomologacao.push(this.ticketsAgenteCategory[cont].homologacao!);
      this.agenteImplantacao.push(this.ticketsAgenteCategory[cont].implantacao!);
      this.agenteLicitacao.push(this.ticketsAgenteCategory[cont].licitacao!);
      this.agenteSemCategoria.push(this.ticketsAgenteCategory[cont].semCategoria!);
      this.agenteServico.push(this.ticketsAgenteCategory[cont].solicitacaoServico!);
      this.agenteSugestao.push(this.ticketsAgenteCategory[cont].sugestao!);
      this.agenteTreinamento.push(this.ticketsAgenteCategory[cont].solicitacaoTreinamento!);
      this.agenteTreinamentoOnline.push(this.ticketsAgenteCategory[cont].treinamentoOnline!);
    }

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

    console.log(config.registros);
    this.urlServe = environment.api + '/api/tickets';
  }

  ngOnInit(): void {
    this.valida = true;

    this.stackedDataAgente = {
      labels: this.agente,
      datasets: [{
        type: 'bar',
        label: 'Novo',
        backgroundColor: '#42A5F5',
        data: this.agenteNew
      }, {
        type: 'bar',
        label: 'Em Atendimento',
        backgroundColor: '#66BB6A',
        data: this.agenteInAttendance
      }, {
        type: 'bar',
        label: 'Parado',
        backgroundColor: '#FFA726',
        data: this.agenteStopped
      }]
    };

    this.stackedOptionsAgente = {
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


    this.stackedDataCategory = {
      labels: this.agenteCategory,
      datasets: [{
        type: 'bar',
        label: 'Customização',
        backgroundColor: '#ffa726',
        data: this.agenteCustomizacao
      }, {
        type: 'bar',
        label: 'Dúvida',
        backgroundColor: '#e4eb6a',
        data: this.agenteDuvida
      },
      {
        type: 'bar',
        label: 'Falha',
        backgroundColor: '#eb0909',
        data: this.agenteFalha
      },
      {
        type: 'bar',
        label: 'Homologação',
        backgroundColor: '#ed9de1',
        data: this.agenteHomologacao
      },
      {
        type: 'bar',
        label: 'Licitação',
        backgroundColor: '#eda69d',
        data: this.agenteLicitacao
      },
      {
        type: 'bar',
        label: 'Sem Categoria',
        backgroundColor: '#785a56',
        data: this.agenteSemCategoria
      },
      {
        type: 'bar',
        label: 'Implantação',
        backgroundColor: '#4b6eb8',
        data: this.agenteImplantacao
      },
      {
        type: 'bar',
        label: 'Solicitação Serviço',
        backgroundColor: '#86b846',
        data: this.agenteServico
      },
      {
        type: 'bar',
        label: 'Treinamento',
        backgroundColor: '#97e6a3',
        data: this.agenteTreinamento
      },
      {
        type: 'bar',
        label: 'Treinamento Online',
        backgroundColor: '#fad473',
        data: this.agenteTreinamentoOnline
      }, {
        type: 'bar',
        label: 'Sugestão',
        backgroundColor: '#f5cee1',
        data: this.agenteSugestao
      }]
    };
    this.stackedOptionsCategory = {
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

    this.dataSituacaoPie = {
      labels: ['Novo-' + this.ticketsSituacao.newReg,
      'Em Atend.-' + this.ticketsSituacao.inAttendance,
      'Parado-' + this.ticketsSituacao.stopped],
      datasets: [
        {
          data: [this.ticketsSituacao.newReg, this.ticketsSituacao.inAttendance, this.ticketsSituacao.stopped],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D"
          ]
        }
      ]
    };

    this.dataUrgenciaPie = {
      labels: ['Sem Urgencia-' + this.ticketsUrgecia.nulo,
      'Baixa-' + this.ticketsUrgecia.baixa,
      'Média-' + this.ticketsUrgecia.media,
      'Alta-' + this.ticketsUrgecia.alta,
      'Urgente-' + this.ticketsUrgecia.urgente],
      datasets: [
        {
          data: [this.ticketsUrgecia.nulo, this.ticketsUrgecia.baixa, this.ticketsUrgecia.media, this.ticketsUrgecia.alta, this.ticketsUrgecia.urgente],
          backgroundColor: [
            "#0512ff",
            "#1b8006",
            "#fff200",
            "#fc590d",
            "#b50505"
          ],
          hoverBackgroundColor: [
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505"
          ]
        }
      ]
    };

    this.dataTipoPie = {
      labels: ['Interno-' + this.ticketsType.interno,
      'Publico-' + this.ticketsType.externo],
      datasets: [
        {
          data: [this.ticketsType.interno, this.ticketsType.externo],
          backgroundColor: [
            "#cc0a95",
            "#0008ff"
          ],
          hoverBackgroundColor: [
            "#ff08b9",
            "#050a9e"
          ]
        }
      ]
    };


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

    this.dataCategoryPie = {
      labels: ['Customização-' + this.ticketsCategory.customizacao,
      'Dúvida-' + this.ticketsCategory.duvida,
      'Falha-' + this.ticketsCategory.falha,
      'Homologação-' + this.ticketsCategory.homologacao,
      'Licitação-' + this.ticketsCategory.licitacao,
      'Sem Categoria-' + this.ticketsCategory.semCategoria,
      'Implantação-' + this.ticketsCategory.implantacao,
      'Solicitação Serviço-' + this.ticketsCategory.solicitacaoServico,
      'Treinamento-' + this.ticketsCategory.solicitacaoTreinamento,
      'Treinamento Online-' + this.ticketsCategory.treinamentoOnline,
      'Sugestão-' + this.ticketsCategory.sugestao
      ],
      datasets: [
        {
          data: [
            this.ticketsCategory.customizacao,this.ticketsCategory.duvida,this.ticketsCategory.falha,
            this.ticketsCategory.homologacao,this.ticketsCategory.licitacao,this.ticketsCategory.semCategoria,
            this.ticketsCategory.implantacao,this.ticketsCategory.solicitacaoServico,this.ticketsCategory.solicitacaoTreinamento,
            this.ticketsCategory.treinamentoOnline,this.ticketsCategory.sugestao
          ],
          backgroundColor: [
            '#ffa726',
            '#e4eb6a',
            '#eb0909',
            '#ed9de1',
            '#eda69d',
            '#785a56',
            '#4b6eb8',
            '#86b846',
            '#97e6a3',
            '#fad473',
            '#f5cee1'
          ],
          hoverBackgroundColor: [
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505",
            "#6067eb",
            "#32db0f",
            "#e6da05",
            "#f56927",
            "#f50505",
            "#6067eb",

          ]
        }
      ]
    };

    this.dataJustificationPie = {
      labels: ['Paralisado-' + this.ticketsJustifation.paralisado,
      'Sem Justificativa-' + this.ticketsJustifation.semjustification,
      'Aguardando Desenvolvimento-' + this.ticketsJustifation.aguarDesenv,
      'Em Analise-' + this.ticketsJustifation.emAnalise,
      'Aguardando Esclarecimentos-' + this.ticketsJustifation.aguardEscla,
      'Respondido pelo Cliente-' + this.ticketsJustifation.responClien,
      'Em Verificação-' + this.ticketsJustifation.emVerificacao,
      'Treinamento Agendado-' + this.ticketsJustifation.treinaAgendad,
      'Aprovado-' + this.ticketsJustifation.aprovado,
      'Em Validação com Suporte-' + this.ticketsJustifation.emValidSupor,
      'Aguardando Atualização-' + this.ticketsJustifation.aguardAtualiz,
      'Aguardando Aprovação-' + this.ticketsJustifation.aguardAprovac,
      'Aguardando Infraestrutura-' + this.ticketsJustifation.aguardInfra,
      'Aguardando Analise-' + this.ticketsJustifation.aguardAnalis,
      'Em testes-' + this.ticketsJustifation.emTestes,
      'Aguardando Analise de impacto-' + this.ticketsJustifation.aguardImpacto,
      'Aguardando encaixe em Versão-' + this.ticketsJustifation.aguardEnVersao,
      'Impacto avaliado-' + this.ticketsJustifation.impaAvaliado,
      'Aguardando Orçamento-' + this.ticketsJustifation.aguardOrcament,
      'Em Verificação com equipe interna-' + this.ticketsJustifation.emVerificaInter,
      'Aguardando Compilação-' + this.ticketsJustifation.aguardCompilac,
      'Em Desenvolvimento-' + this.ticketsJustifation.emDesenvolviment,
      'Aguardando Faturamento-' + this.ticketsJustifation.aguardFaturame,
      'Aguardando Informações de Clientes e Parceiros-' + this.ticketsJustifation.aguardInfParCli,
      'Desenvolvido-' + this.ticketsJustifation.desenvolvido,
      'Aguardando aprovação da pré analise-' + this.ticketsJustifation.aguarAprovPreAnali,
      'Aguardando Esclarecimentos do Suporte-' + this.ticketsJustifation.aguarEsclaSup,
      'Aguardando validação de parceiro/IDS-' + this.ticketsJustifation.aguarValidParc,
      'Agendada Visita Técnica-' + this.ticketsJustifation.agendVistTecn,
      'Pré analise aprovada-' + this.ticketsJustifation.preAnalAprov,
      'Enviado para analise-' + this.ticketsJustifation.envAnalise,
      'Aguardando retorno do Cliente-' + this.ticketsJustifation.aguarRetClien],
      datasets: [
        {
          data: [this.ticketsJustifation.paralisado, this.ticketsJustifation.semjustification, this.ticketsJustifation.aguarDesenv,
          this.ticketsJustifation.emAnalise, this.ticketsJustifation.aguardEscla, this.ticketsJustifation.responClien,
          this.ticketsJustifation.emVerificacao, this.ticketsJustifation.treinaAgendad, this.ticketsJustifation.aprovado,
          this.ticketsJustifation.emValidSupor, this.ticketsJustifation.aguardAtualiz, this.ticketsJustifation.aguardAprovac,
          this.ticketsJustifation.aguardInfra, this.ticketsJustifation.aguardAnalis, this.ticketsJustifation.emTestes,
          this.ticketsJustifation.aguardImpacto, this.ticketsJustifation.aguardEnVersao, this.ticketsJustifation.impaAvaliado,
          this.ticketsJustifation.aguardOrcament, this.ticketsJustifation.emVerificaInter, this.ticketsJustifation.aguardCompilac,
          this.ticketsJustifation.emDesenvolviment, this.ticketsJustifation.aguardFaturame, this.ticketsJustifation.aguardInfParCli,
          this.ticketsJustifation.desenvolvido, this.ticketsJustifation.aguarAprovPreAnali, this.ticketsJustifation.aguarEsclaSup,
          this.ticketsJustifation.aguarValidParc, this.ticketsJustifation.agendVistTecn, this.ticketsJustifation.preAnalAprov,
          this.ticketsJustifation.envAnalise, this.ticketsJustifation.aguarRetClien],
          backgroundColor: [
            "#f2993f",
            "#ed714e",
            "#5bde79",
            "#2eb04c",
            "#eb81d2",
            "#73057d",
            "#e0313d",
            "#fff200",
            "#057a17",
            "#5c9e97",
            "#c25211",
            "#7d0202",
            "#4a2e2e",
            "#fc590d",
            "#05ff82",
            "#cc021a",
            "#166380",
            "#224f13",
            "#eda51f",
            "#540000",
            "#607002",
            "#07c1f5",
            "#c607db",
            "#db075f",
            "#13024d",
            "#a9c9c3",
            "#2b1127",
            "#ff0000",
            "#5c5b50",
            "#0059ff",
            "#00e308",
            "#d0ff00"
          ],
          hoverBackgroundColor: [
           "#f5a351",
            "#e3856b",
            "#8cde9f",
            "#2eb04c",
            "#6eb57f",
            "#74337a",
            "#e35d66",
            "#fcf674",
            "#4b9657",
            "#95a3a2",
            "#ba6e41",
            "#822e2e",
            "#634848",
            "#ff9e70",
            "#6ff2b1",
            "#f52f46",
            "#4389a3",
            "#468a2f",
            "#f7bf57",
            "#6e1e1e",
            "#697522",
            "#9dd4e3",
            "#d373de",
            "#d95d90",
            "#3f2a87",
            "#dff5f1",
            "#963b88",
            "#f55656",
            "#a3a39b",
            "#70a2ff",
            "#47ff4e",
            "#e9ff8a"
          ]
        }
      ]
    };
    this.valida = false;

    this.timeCarregar();
    this.timeAtualizaPage();
  }



  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  //tempo para a troca de pagina
  public timeCarregar() {
    setTimeout(() => {
      this.valida = true;
      this.tab = (this.tab === 4) ? this.tab = 0 : this.tab + 1;
      this.timeLoading();
      this.timeCarregar();
    }, 40000);
  }

  //faz o loading da troca de graficos
  public timeLoading() {
    setTimeout(() => {
      this.valida = false;
    }, 2000);
  }

  //atualiza a pagina a cada 15 minutos
  public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['loading'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }
}
