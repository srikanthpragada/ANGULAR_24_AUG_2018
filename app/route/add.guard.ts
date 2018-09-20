import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from './add.component';

@Injectable()
export class AddRouteGuard implements CanDeactivate<AddComponent> {
    canDeactivate(
        component: AddComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!component.done)
           return confirm('Do you want to leave add form?')
        else
           return true; 
    }
}