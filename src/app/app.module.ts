import { FilterServersPipe } from './pipes/pipes-refresher-component/filter-servers.pipe';
import { MultiplierPipe } from './pipes/pipes-refresher-component/multiplier.pipe';
import { PipesRefresherComponentComponent } from './pipes/pipes-refresher-component/pipes-refresher-component.component';
import { NotIfDirective } from './custom-directives/not-if.directive';
import { DropdownDirective } from './custom-directives/dropdown.directive';
import { EvenBetterHighlighterDirective } from './custom-directives/even-better-highlighter.directive';
import { BasicHighlighterDirective } from './custom-directives/basic-highlighter.directive';

import { EeevenBetterHighlighterDirective } from './custom-directives/eeeven-better-highlighter.directive';
import { TDFormComponent } from './forms/td.form.component';
import { CommonService } from './common-services/services';
import { ServerDataService } from './servers/server.data.service';
import { GithubAuthInterceptor } from './servers/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { MyAnotherCompComponent } from './my-another-comp/my-another-comp.component';



@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    TDFormComponent,
    MyAnotherCompComponent,
    EeevenBetterHighlighterDirective,
    BasicHighlighterDirective,
    EvenBetterHighlighterDirective,
    DropdownDirective,
    NotIfDirective,
    PipesRefresherComponentComponent,
    MultiplierPipe,
    FilterServersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GithubAuthInterceptor,
    multi: true
  },
    ServerDataService,
    CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
