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
import { TicketsAnos } from './models/TicketsAnos';
import { TicketsMesesDias } from './models/TicketsMesesDias';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit, OnDestroy {
  //Empilha tickets Agente 
  public stackedDataAgente: any;
  public stackedOptionsAgente: any;

  //Empilha tickets Agente 7 dias
  public stackedDataAgenteSeven: any;
  public stackedOptionsAgenteSeven: any;

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

  //tickets por situacao 7 dias
  public dataSitSevenPie: any;
  public chartOptionsSitSevenPie: any;

  //tickets por urgencia7 dias
  public dataUrgSevenPie: any;
  public chartOptionsUrgSevenPie: any;

  //tickets por Categoria 7 dias
  public dataCatSevenPie: any;
  public chartOptionsCatSevenPie: any;


  //tickets por tipo
  public dataTipoPie: any;
  public chartOptionsTipoPie: any;

  //tickets por Categoria
  public dataCategoryPie: any;
  public chartOptionsCategoryPie: any;

  //tickets por Justificativa
  public dataJustificationPie: any;
  public chartJustificationPie: any;

  //tickets anos
  public lineStylesData: any;
  public basicOptions: any;

  //tickets meses
  public lineStylesMesesData: any;

  //tickets 7dias
  public lineStylesSevenData: any;


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
  public ticketsAnos!: TicketsAnos[];
  public ticketsSevenSituacao!: TicketsSituacao;
  public ticketsSevenUrgecia!: TicketsUrgency;
  public ticketsSevenCategory!: Category;
  public ticketsSevenAgente!: AgenteTickets[];

  // controla aba para apresentação
  public tab: number = 0;

  //variaveis agentexsituacao
  public agente: string[] = [];
  public agenteInAttendance: number[] = [];
  public agenteNew: number[] = [];
  public agenteStopped: number[] = [];

  //variaveis agentexsituacao 7 dias
  public agenteseven: string[] = [];
  public agenteInAttendanceSeven: number[] = [];
  public agenteNewSeven: number[] = [];
  public agenteStoppedSeven: number[] = [];
  public agenteCanceledSeven: number[] = [];
  public agenteResolvedSeven: number[] = [];
  public agenteClosedSeven: number[] = [];

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
  
  //Anos
  public anos: number[] = [];
  public anosQuant: number[] = [];

  
  //meses
  public meses: String[] = [];
  public quantmeses: number[] = [];
  public customizacao: number[] = [];
  public duvida: number[] = [];
  public falha: number[] = [];
  public homologacao: number[] = [];
  public implantacao: number[] = [];
  public licitacao: number[] = [];
  public semCategoria: number[] = [];
  public solicitacaoServico: number[] = [];
  public solicitacaoTreinamento: number[] = [];
  public sugestao: number[] = [];
  public treinamentoOnline: number[] = [];

  //sevendias
  public sevendias: String[] = [];
  public quantsevendias: number[] = [];
  public customizacaosevendias: number[] = [];
  public duvidasevendias: number[] = [];
  public falhasevendias: number[] = [];
  public homologacaosevendias: number[] = [];
  public implantacaosevendias: number[] = [];
  public licitacaosevendias: number[] = [];
  public semCategoriasevendias: number[] = [];
  public solicitacaoServicosevendias: number[] = [];
  public solicitacaoTreinamentosevendias: number[] = [];
  public sugestaosevendias: number[] = [];
  public treinamentoOnlinesevendias: number[] = [];

  public ticketsMesesCategory!: TicketsMesesDias[];
  public ticketsDiasCategory!: TicketsMesesDias[];

  //tickets por situacao 7 dias
    public dataSitDayPie: any;
    public chartOptionsSitDayPie: any;
  
    //tickets por urgencia7 dias
    public dataUrgDayPie: any;
    public chartOptionsUrgDayPie: any;
  
    //tickets por Categoria 7 dias
    public dataCatDayPie: any;
    public chartOptionsCatDayPie: any;
  
    public ticketsDaySituacao!: TicketsSituacao;
    public ticketsDayUrgecia!: TicketsUrgency;
    public ticketsDayCategory!: Category;

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

  //tickets dia atual
  public lineStylesDayData: any;
  public ticketsDayDiasCategory!: TicketsMesesDias[];

   //daydias
   public daydias: String[] = [];
   public quantdaydias: number[] = [];
   public customizacaodaydias: number[] = [];
   public duvidadaydias: number[] = [];
   public falhadaydias: number[] = [];
   public homologacaodaydias: number[] = [];
   public implantacaodaydias: number[] = [];
   public licitacaodaydias: number[] = [];
   public semCategoriadaydias: number[] = [];
   public solicitacaoServicodaydias: number[] = [];
   public solicitacaoTreinamentodaydias: number[] = [];
   public sugestaodaydias: number[] = [];
   public treinamentoOnlinedaydias: number[] = [];

  public ticketsDayAgente!: AgenteTickets[];


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
    this.ticketsAnos = config.anos!;
    this.ticketsMesesCategory = config.mesescategory!;
    this.ticketsSevenSituacao = config.sevensituacao!;
    this.ticketsSevenUrgecia = config.sevenurgency!;
    this.ticketsSevenCategory = config.sevencategory!;
    this.ticketsSevenAgente = config.sevenagente!;
    this.ticketsDiasCategory = config.sevendaycategory!;
      this.ticketsDaySituacao = config.daysituacao!;
    this.ticketsDayUrgecia = config.dayurgency!;
    this.ticketsDayCategory = config.daycategory!;
   this.ticketsDayDiasCategory = config.daydaycategory!;
      this.ticketsDayAgente = config.dayagente!;

    

    for (let cont = 0; cont < this.ticketsAnos.length; cont++) {
      this.anos.push(this.ticketsAnos[cont].ano!);
      this.anosQuant.push(this.ticketsAnos[cont].quantidade!);
    }

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

    for (let cont = 0; cont < this.ticketsMesesCategory.length; cont++) {
      this.meses.push(this.ticketsMesesCategory[cont].mesesDia!);
      this.quantmeses.push(this.ticketsMesesCategory[cont].quantidade!);
      this.customizacao.push(this.ticketsMesesCategory[cont].category?.customizacao!);
      this.duvida.push(this.ticketsMesesCategory[cont].category?.duvida!);
      this.falha.push(this.ticketsMesesCategory[cont].category?.falha!);
      this.homologacao.push(this.ticketsMesesCategory[cont].category?.homologacao!);
      this.implantacao.push(this.ticketsMesesCategory[cont].category?.implantacao!);
      this.licitacao.push(this.ticketsMesesCategory[cont].category?.licitacao!);
      this.semCategoria.push(this.ticketsMesesCategory[cont].category?.semCategoria!);
      this.solicitacaoServico.push(this.ticketsMesesCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamento.push(this.ticketsMesesCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestao.push(this.ticketsMesesCategory[cont].category?.sugestao!);
      this.treinamentoOnline.push(this.ticketsMesesCategory[cont].category?.treinamentoOnline!);

    }

    for (let cont = 0; cont < this.ticketsSevenAgente.length; cont++) {
      this.agenteseven.push(this.ticketsSevenAgente[cont].businessName!);
      this.agenteInAttendanceSeven.push(this.ticketsSevenAgente[cont].quantTicketsInAttendance!);
      this.agenteNewSeven.push(this.ticketsSevenAgente[cont].quantTicketsNew!);
      this.agenteStoppedSeven.push(this.ticketsSevenAgente[cont].quantTicketsStopped!);
      this.agenteCanceledSeven.push(this.ticketsSevenAgente[cont].quantTicketsCanceled!);
      this.agenteResolvedSeven.push(this.ticketsSevenAgente[cont].quantTicketsResolved!);
      this.agenteClosedSeven.push(this.ticketsSevenAgente[cont].quantTicketsClosed!);
    }

    for (let cont = 0; cont < this.ticketsDiasCategory.length; cont++) {
      this.sevendias.push(this.ticketsDiasCategory[cont].mesesDia!);
      this.quantsevendias.push(this.ticketsDiasCategory[cont].quantidade!);
      this.customizacaosevendias.push(this.ticketsDiasCategory[cont].category?.customizacao!);
      this.duvidasevendias.push(this.ticketsDiasCategory[cont].category?.duvida!);
      this.falhasevendias.push(this.ticketsDiasCategory[cont].category?.falha!);
      this.homologacaosevendias.push(this.ticketsDiasCategory[cont].category?.homologacao!);
      this.implantacaosevendias.push(this.ticketsDiasCategory[cont].category?.implantacao!);
      this.licitacaosevendias.push(this.ticketsDiasCategory[cont].category?.licitacao!);
      this.semCategoriasevendias.push(this.ticketsDiasCategory[cont].category?.semCategoria!);
      this.solicitacaoServicosevendias.push(this.ticketsDiasCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamentosevendias.push(this.ticketsDiasCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestaosevendias.push(this.ticketsDiasCategory[cont].category?.sugestao!);
      this.treinamentoOnlinesevendias.push(this.ticketsDiasCategory[cont].category?.treinamentoOnline!);
    }

    for (let cont = 0; cont < this.ticketsDayDiasCategory.length; cont++) {
      this.daydias.push(this.ticketsDayDiasCategory[cont].mesesDia!);
      this.quantdaydias.push(this.ticketsDayDiasCategory[cont].quantidade!);
      this.customizacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.customizacao!);
      this.duvidadaydias.push(this.ticketsDayDiasCategory[cont].category?.duvida!);
      this.falhadaydias.push(this.ticketsDayDiasCategory[cont].category?.falha!);
      this.homologacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.homologacao!);
      this.implantacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.implantacao!);
      this.licitacaodaydias.push(this.ticketsDayDiasCategory[cont].category?.licitacao!);
      this.semCategoriadaydias.push(this.ticketsDayDiasCategory[cont].category?.semCategoria!);
      this.solicitacaoServicodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoServico!);
      this.solicitacaoTreinamentodaydias.push(this.ticketsDayDiasCategory[cont].category?.solicitacaoTreinamento!);
      this.sugestaodaydias.push(this.ticketsDayDiasCategory[cont].category?.sugestao!);
      this.treinamentoOnlinedaydias.push(this.ticketsDayDiasCategory[cont].category?.treinamentoOnline!);
    }

    for (let cont = 0; cont < this.ticketsDayAgente.length; cont++) {
      this.agenteDay.push(this.ticketsDayAgente[cont].businessName!);
      this.agenteInAttendanceDay.push(this.ticketsDayAgente[cont].quantTicketsInAttendance!);
      this.agenteNewDay.push(this.ticketsDayAgente[cont].quantTicketsNew!);
      this.agenteStoppedDay.push(this.ticketsDayAgente[cont].quantTicketsStopped!);
      this.agenteCanceledDay.push(this.ticketsDayAgente[cont].quantTicketsCanceled!);
      this.agenteResolvedDay.push(this.ticketsDayAgente[cont].quantTicketsResolved!);
      this.agenteClosedDay.push(this.ticketsDayAgente[cont].quantTicketsClosed!);
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

  this.lineStylesMesesData = {
    labels: this.meses,
    datasets: [
      {
        label: 'Customização',
        data: this.customizacao,
        fill: false,
        tension: .4,
        borderColor: '#ffa726'
      },
      {
        label: 'Duvida',
        data: this.duvida,
        fill: false,
        tension: .4,
        borderColor: '#e4eb6a'
      },
      {
        label: 'Falha',
        data: this.falha,
        fill: false,
        borderColor: '#eb0909',
        tension: .4
      },
      {
        label: 'Homologação',
        data: this.homologacao,
        fill: false,
        tension: .4,
        borderColor: '#ed9de1'
      },
      {
        label: 'Implantação',
        data: this.implantacao,
        fill: false,
        tension: .4,
        borderColor: '#4b6eb8'
      },
      {
        label: 'Licitação',
        data: this.licitacao,
        fill: false,
        borderColor: '#eda69d',
        tension: .4,
      },
      {
        label: 'Sem Categoria',
        data: this.semCategoria,
        fill: false,
        tension: .4,
        borderColor: '#785a56'
      },
      {
        label: 'Solicitação Serviço',
        data: this.solicitacaoServico,
        fill: false,
        tension: .4,
        borderColor: '#86b846'
      },
      {
        label: 'Solicitação de Treinamento',
        data: this.solicitacaoTreinamento,
        fill: false,
        borderColor: '#97e6a3',
        tension: .4,
      },
      {
        label: 'Sugestão',
        data: this.sugestao,
        fill: false,
        tension: .4,
        borderColor: '#f5cee1'
      },
      {
        label: 'Treinamento Online',
        data: this.treinamentoOnline,
        fill: false,
        tension: .4,
        borderColor: '#fad473'
      },
      {
        label: 'Total Por Mês',
        data: this.quantmeses,
        fill: false,
        borderDash: [5, 5],
        borderColor: '#FFA726',
        tension: .4,

    }
    ]
  };

  this.dataSitSevenPie = {
    labels: ['Novo-' + this.ticketsSevenSituacao.newReg,
    'Em Atend.-' + this.ticketsSevenSituacao.inAttendance,
    'Parado-' + this.ticketsSevenSituacao.stopped,
    'Cancelado-' + this.ticketsSevenSituacao.canceled,
    'Resolvido-' + this.ticketsSevenSituacao.resolved,
    'Fechado-' + this.ticketsSevenSituacao.closed],
    datasets: [
      {
        data: [this.ticketsSevenSituacao.newReg, this.ticketsSevenSituacao.inAttendance, 
          this.ticketsSevenSituacao.stopped,this.ticketsSevenSituacao.canceled,
          this.ticketsSevenSituacao.resolved,this.ticketsSevenSituacao.closed],
        backgroundColor: [
          "#42A5F5",
          "#66BB6A",
          "#FFA726",
          "#b80000",
          "#00ffe5",
          "#e30ebf"

        ],
        hoverBackgroundColor: [
          "#64B5F6",
          "#81C784",
          "#FFB74D",
          "#b53535",
          "#b3f5ee",
          "#eb8ddb"
        ]
      }
    ]
  };

  this.dataUrgSevenPie = {
    labels: ['Sem Urgencia-' + this.ticketsSevenUrgecia.nulo,
    'Baixa-' + this.ticketsSevenUrgecia.baixa,
    'Média-' + this.ticketsSevenUrgecia.media,
    'Alta-' + this.ticketsSevenUrgecia.alta,
    'Urgente-' + this.ticketsSevenUrgecia.urgente],
    datasets: [
      {
        data: [this.ticketsSevenUrgecia.nulo, this.ticketsSevenUrgecia.baixa, this.ticketsSevenUrgecia.media, 
          this.ticketsSevenUrgecia.alta, this.ticketsSevenUrgecia.urgente],
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

  this.dataCatSevenPie = {
    labels: ['Customização-' + this.ticketsSevenCategory.customizacao,
    'Dúvida-' + this.ticketsSevenCategory.duvida,
    'Falha-' + this.ticketsSevenCategory.falha,
    'Homologação-' + this.ticketsSevenCategory.homologacao,
    'Licitação-' + this.ticketsSevenCategory.licitacao,
    'Sem Categoria-' + this.ticketsSevenCategory.semCategoria,
    'Implantação-' + this.ticketsSevenCategory.implantacao,
    'Solicitação Serviço-' + this.ticketsSevenCategory.solicitacaoServico,
    'Treinamento-' + this.ticketsSevenCategory.solicitacaoTreinamento,
    'Treinamento Online-' + this.ticketsSevenCategory.treinamentoOnline,
    'Sugestão-' + this.ticketsSevenCategory.sugestao
    ],
    datasets: [
      {
        data: [
          this.ticketsSevenCategory.customizacao,this.ticketsSevenCategory.duvida,this.ticketsSevenCategory.falha,
          this.ticketsSevenCategory.homologacao,this.ticketsSevenCategory.licitacao,this.ticketsSevenCategory.semCategoria,
          this.ticketsSevenCategory.implantacao,this.ticketsSevenCategory.solicitacaoServico,this.ticketsSevenCategory.solicitacaoTreinamento,
          this.ticketsSevenCategory.treinamentoOnline,this.ticketsSevenCategory.sugestao
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

  this.lineStylesSevenData = {
    labels: this.sevendias,
    datasets: [
      {
        label: 'Customização',
        data: this.customizacaosevendias,
        fill: false,
        tension: .4,
        borderColor: '#ffa726'
      },
      {
        label: 'Duvida',
        data: this.duvidasevendias,
        fill: false,
        tension: .4,
        borderColor: '#e4eb6a'
      },
      {
        label: 'Falha',
        data: this.falhasevendias,
        fill: false,
        borderColor: '#eb0909',
        tension: .4
      },
      {
        label: 'Homologação',
        data: this.homologacaosevendias,
        fill: false,
        tension: .4,
        borderColor: '#ed9de1'
      },
      {
        label: 'Implantação',
        data: this.implantacaosevendias,
        fill: false,
        tension: .4,
        borderColor: '#4b6eb8'
      },
      {
        label: 'Licitação',
        data: this.licitacaosevendias,
        fill: false,
        borderColor: '#eda69d',
        tension: .4,
      },
      {
        label: 'Sem Categoria',
        data: this.semCategoriasevendias,
        fill: false,
        tension: .4,
        borderColor: '#785a56'
      },
      {
        label: 'Solicitação Serviço',
        data: this.solicitacaoServicosevendias,
        fill: false,
        tension: .4,
        borderColor: '#86b846'
      },
      {
        label: 'Solicitação de Treinamento',
        data: this.solicitacaoTreinamentosevendias,
        fill: false,
        borderColor: '#97e6a3',
        tension: .4,
      },
      {
        label: 'Sugestão',
        data: this.sugestaosevendias,
        fill: false,
        tension: .4,
        borderColor: '#f5cee1'
      },
      {
        label: 'Treinamento Online',
        data: this.treinamentoOnlinesevendias,
        fill: false,
        tension: .4,
        borderColor: '#fad473'
      },
      {
        label: 'Total Por Dia',
        data: this.quantsevendias,
        fill: false,
        borderDash: [5, 5],
        borderColor: '#FFA726',
        tension: .4,

    }
    ]
  };

  this.dataSitDayPie = {
      labels: ['Novo-' + this.ticketsDaySituacao.newReg,
      'Em Atend.-' + this.ticketsDaySituacao.inAttendance,
      'Parado-' + this.ticketsDaySituacao.stopped,
      'Cancelado-' + this.ticketsDaySituacao.canceled,
      'Resolvido-' + this.ticketsDaySituacao.resolved,
      'Fechado-' + this.ticketsDaySituacao.closed],
      datasets: [
        {
          data: [this.ticketsDaySituacao.newReg, this.ticketsDaySituacao.inAttendance,
          this.ticketsDaySituacao.stopped, this.ticketsDaySituacao.canceled,
          this.ticketsDaySituacao.resolved, this.ticketsDaySituacao.closed],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#b80000",
            "#00ffe5",
            "#e30ebf"

          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#b53535",
            "#b3f5ee",
            "#eb8ddb"
          ]
        }
      ]
    };

    this.dataUrgDayPie = {
      labels: ['Sem Urgencia-' + this.ticketsDayUrgecia.nulo,
      'Baixa-' + this.ticketsDayUrgecia.baixa,
      'Média-' + this.ticketsDayUrgecia.media,
      'Alta-' + this.ticketsDayUrgecia.alta,
      'Urgente-' + this.ticketsDayUrgecia.urgente],
      datasets: [
        {
          data: [this.ticketsDayUrgecia.nulo, this.ticketsDayUrgecia.baixa, this.ticketsDayUrgecia.media,
          this.ticketsDayUrgecia.alta, this.ticketsDayUrgecia.urgente],
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

    this.dataCatDayPie = {
      labels: ['Customização-' + this.ticketsDayCategory.customizacao,
      'Dúvida-' + this.ticketsDayCategory.duvida,
      'Falha-' + this.ticketsDayCategory.falha,
      'Homologação-' + this.ticketsDayCategory.homologacao,
      'Licitação-' + this.ticketsDayCategory.licitacao,
      'Sem Categoria-' + this.ticketsDayCategory.semCategoria,
      'Implantação-' + this.ticketsDayCategory.implantacao,
      'Solicitação Serviço-' + this.ticketsDayCategory.solicitacaoServico,
      'Treinamento-' + this.ticketsDayCategory.solicitacaoTreinamento,
      'Treinamento Online-' + this.ticketsDayCategory.treinamentoOnline,
      'Sugestão-' + this.ticketsDayCategory.sugestao
      ],
      datasets: [
        {
          data: [
            this.ticketsDayCategory.customizacao, this.ticketsDayCategory.duvida, this.ticketsDayCategory.falha,
            this.ticketsDayCategory.homologacao, this.ticketsDayCategory.licitacao, this.ticketsDayCategory.semCategoria,
            this.ticketsDayCategory.implantacao, this.ticketsDayCategory.solicitacaoServico, this.ticketsDayCategory.solicitacaoTreinamento,
            this.ticketsDayCategory.treinamentoOnline, this.ticketsDayCategory.sugestao
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
this.lineStylesDayData = {
      labels: this.daydias,
      datasets: [
        {
          label: 'Customização',
          data: this.customizacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#ffa726'
        },
        {
          label: 'Duvida',
          data: this.duvidadaydias,
          fill: false,
          tension: .4,
          borderColor: '#e4eb6a'
        },
        {
          label: 'Falha',
          data: this.falhadaydias,
          fill: false,
          borderColor: '#eb0909',
          tension: .4
        },
        {
          label: 'Homologação',
          data: this.homologacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#ed9de1'
        },
        {
          label: 'Implantação',
          data: this.implantacaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#4b6eb8'
        },
        {
          label: 'Licitação',
          data: this.licitacaodaydias,
          fill: false,
          borderColor: '#eda69d',
          tension: .4,
        },
        {
          label: 'Sem Categoria',
          data: this.semCategoriadaydias,
          fill: false,
          tension: .4,
          borderColor: '#785a56'
        },
        {
          label: 'Solicitação Serviço',
          data: this.solicitacaoServicodaydias,
          fill: false,
          tension: .4,
          borderColor: '#86b846'
        },
        {
          label: 'Solicitação de Treinamento',
          data: this.solicitacaoTreinamentodaydias,
          fill: false,
          borderColor: '#97e6a3',
          tension: .4,
        },
        {
          label: 'Sugestão',
          data: this.sugestaodaydias,
          fill: false,
          tension: .4,
          borderColor: '#f5cee1'
        },
        {
          label: 'Treinamento Online',
          data: this.treinamentoOnlinedaydias,
          fill: false,
          tension: .4,
          borderColor: '#fad473'
        },
        {
          label: 'Total Por Dia',
          data: this.quantdaydias,
          fill: false,
          borderDash: [5, 5],
          borderColor: '#FFA726',
          tension: .4,
  
      }
      ]
    };

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
      this.tab = (this.tab === 12) ? this.tab = 0 : this.tab + 1;
      this.timeLoading();
      this.timeCarregar();
    }, 40000);
  }

  //faz o loading da troca de graficos
  public timeLoading() {
    setTimeout(() => {
      this.valida = false;
    }, 1000);
  }

  //atualiza a pagina a cada 15 minutos
  public timeAtualizaPage() {
    setTimeout(() => {
      this.router.navigate(['loading'], { relativeTo: this.route.parent });
      this.timeAtualizaPage;
    }, 900000);
  }
}
