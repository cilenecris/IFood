import { RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { OrderComponent } from './order.component';

export class LeaverOrderGuard implements CanDeactivate<OrderComponent> {
    canDeactivate( 
        orderComponent: OrderComponent,
        activateRoute: ActivatedRouteSnapshot,
        routerState: RouterStateSnapshot ): boolean {
            if (!orderComponent.isOrderCompleted()) {
              return window.confirm("Deseja desistir da compra:");
            } else {
                return true;
            }
        }
}