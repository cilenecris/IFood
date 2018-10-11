import { LoginService } from "./login/login.service";
import { Route, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginService: LoginService) {}

  checkAutentication( path: string ): boolean {
    const loggedIn = this.loginService.isLoggedIn();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    console.log('canLoad');
    return this.checkAutentication( route.path )
  }

  canActivate( activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot ): boolean {
    console.log('canActivate');
    return this.checkAutentication( activatedRoute.routeConfig.path );
  }

}