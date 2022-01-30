import { Component, OnInit } from '@angular/core';
import { CustomMenuItem } from 'src/app/modules/menu/models/menu-item.model';
import { ApplicationStateService } from 'src/app/services/application-state.service';
import { MenuDataService } from 'src/app/services/menu-data.service';

import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: 'menu.component.html',
    styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

    items: CustomMenuItem[] | undefined;
    selectedItem: string | undefined;
    visible!: boolean;

   

    constructor(
        private primengConfig: PrimeNGConfig,
        private menuDataService: MenuDataService,
        private applicationStateService: ApplicationStateService,
    ) { }

    ngOnInit() { 
       

        this.primengConfig.ripple = true;
        this.items = this.menuDataService.getMenuList();

        let that = this;
        this.menuDataService.toggleMenuBar.subscribe(function (data: any) {
            if (data && data != null) {
                that.visible = !that.visible;
            }
        });

        if (this.applicationStateService.getIsMobileResolution()) {
            this.visible = false;
        } else {
            this.visible = false;
        }

        let activeMenu: any = true;
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    ngOnDestroy() {
        this.menuDataService.toggleMenuBar.observers.forEach(function (element) { element.complete(); });
    }

   
    public onMenuClick(menu: CustomMenuItem) {

       console.log(menu);
        // if child are available then open child
        if (menu.Childs != undefined || menu.Childs != null) {
            this.toggleSubMenu(menu);
            return;
        }
     
        if (menu.RouterLink == undefined || menu.RouterLink == null || menu.RouterLink == "") {
            return;
        }



        this.selectedItem = menu.Label;
        // hide menu bar after menu click for mobile layout        
        setTimeout(() => {
            if (this.applicationStateService.getIsMobileResolution()) {
                this.visible = false;
            }
        }, 100);
    }

    public menuClick(menu: CustomMenuItem) {
        if  (menu.RouterLink != null ) {
            this.visible = false;
        }
    }

    // toggle sub menu on click
    toggleSubMenu(menu: CustomMenuItem) {
        menu.IsChildVisible = !menu.IsChildVisible;
    }

    
}
