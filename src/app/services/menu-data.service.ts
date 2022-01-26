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
                Label: 'Graficos Automaticos', Icon: 'pi pi-sliders-h', RouterLink: 'loading', Childs: [], IsChildVisible: false
                
            },
            {
                Label: 'Tickets Abertos por Situação', Icon: 'pi pi-sliders-h', RouterLink: 'abertos', Childs: [], IsChildVisible: false
                
            },
            {
                Label: 'Tickets Abertos x Analista', Icon: 'pi pi-sliders-h', RouterLink: 'abertosAnalista', Childs: [], IsChildVisible: false
                
            },
            {
                Label: 'Tickets por Categoria x Analista', Icon: 'pi pi-sliders-h', RouterLink: 'abertosCategoria', Childs: [], IsChildVisible: false
                
            },
            {
                Label: 'Tickets por Justifativa x Analista', Icon: 'pi pi-sliders-h', RouterLink: 'abertosJustificativa', Childs: [], IsChildVisible: false
                
            },
            {
                Label: 'Tickets por Justifativa e Categoria', Icon: 'pi pi-sliders-h', RouterLink: 'categoriaJustificativa', Childs: [], IsChildVisible: false
                
            }

        ];
    }
}