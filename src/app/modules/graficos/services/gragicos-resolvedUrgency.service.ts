import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class GraficoResolveUrgencyService implements Resolve<any> {
    
    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any  {
        const api = `${environment.api}/api/tickets/urgencysum`;
        return this.http.get<any>(api).pipe(map((item: any) => item));
    }

}
