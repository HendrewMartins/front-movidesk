import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../modules/menu/models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Graficos Automaticos', Icon: 'pi pi-play', RouterLink: 'loading', Childs: [], IsChildVisible: false

            },
            {
                Label: 'Tickets Abertos', Icon: 'pi pi-chevron-down', RouterLink: null, Childs: [
                    {
                        Label: 'Tickets Abertos por Situação', Icon: 'pi pi-th-large', RouterLink: 'abertos', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Tickets Abertos x Analista', Icon: 'pi pi-user', RouterLink: 'abertosAnalista', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Categoria x Analista', Icon: 'pi pi-user-plus', RouterLink: 'abertosCategoria', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Justifativa x Analista', Icon: 'pi pi-align-justify', RouterLink: 'abertosJustificativa', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Tickets(Justifativa,Categoria)', Icon: 'pi pi-clone', RouterLink: 'categoriaJustificativa', Childs: [], IsChildVisible: false

                    },
                ], IsChildVisible: false

            },
            {
                Label: 'Serie Historica', Icon: 'pi pi-chevron-down', RouterLink: null, Childs: [
                    {
                        Label: 'Serie Historica por Ano', Icon: 'pi pi-chart-bar', RouterLink: 'anos', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Serie Historica x Categoria', Icon: 'pi pi-sitemap', RouterLink: 'anoscategoria', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Meses x Categoria', Icon: 'pi pi-sliders-h', RouterLink: 'mesescategoria', Childs: [], IsChildVisible: false

                    },
                ], IsChildVisible: false

            },
            {
                Label: 'Ultimos 7 dias', Icon: 'pi pi-chevron-down', RouterLink: null, Childs: [
                    {
                        Label: 'Resumo 7 Dias', Icon: 'pi pi-sort-amount-down', RouterLink: 'resumosevendias', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Agente x Situação 7 Dias', Icon: 'pi pi-users', RouterLink: 'agentesevendias', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Categoria e Total dos 7 Dias', Icon: 'pi pi-chart-line', RouterLink: 'categoriasevendias', Childs: [], IsChildVisible: false

                    },
                ], IsChildVisible: false

            },
            {
                Label: 'Dia Atual', Icon: 'pi pi-chevron-down', RouterLink: null, Childs: [

                    {
                        Label: 'Resumo do Dia Atual', Icon: 'pi pi-calendar', RouterLink: 'resumoday', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Agente x Situação dia Atual', Icon: 'pi pi-sun', RouterLink: 'agenteday', Childs: [], IsChildVisible: false

                    },
                    {
                        Label: 'Categoria e Total do Dia Atual', Icon: 'pi pi-window-minimize', RouterLink: 'categoryday', Childs: [], IsChildVisible: false

                    },
                ], IsChildVisible: false

            },

            {
                Label: 'Médias de Tempo', Icon: 'pi pi-chevron-down', RouterLink: null, Childs: [

                ], IsChildVisible: false

            },

        ];
    }
}