import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';
import { MsalGuard } from '@azure/msal-angular';

import { HomeComponent } from './home/home.component';
import { GuardedComponent } from './guarded/guarded.component';

const routes: Routes = [
  {
    path: 'guarded',
    component: GuardedComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation:
        !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
          ? 'enabledNonBlocking'
          : 'disabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
