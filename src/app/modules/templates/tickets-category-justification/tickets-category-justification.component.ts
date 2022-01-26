import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../graficos/models/category';
import { Justification } from '../../graficos/models/justification';
import { ResolvedConfig } from '../../graficos/models/resolvedConfig';

@Component({
  selector: 'app-tickets-category-justification',
  templateUrl: './tickets-category-justification.component.html',
  styleUrls: ['./tickets-category-justification.component.css']
})
export class TicketsCategoryJustificationComponent implements OnInit {

  //tickets por Categoria
  public dataCategoryPie: any;
  public chartOptionsCategoryPie: any;

  //tickets por Justificativa
  public dataJustificationPie: any;
  public chartOptionsJustificationPie: any;

  
  public ticketsCategory!: Category;
  public ticketsJustifation!: Justification;

  constructor(
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
  ) { 
    const config: ResolvedConfig = this.route.snapshot.data as any;
    this.ticketsCategory = config.category!;
    this.ticketsJustifation = config.justification!;
  }

  ngOnInit(): void {
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
