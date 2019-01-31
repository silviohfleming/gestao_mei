import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GrupoService } from './grupo.service';
import { GrupoComponent } from './grupo/grupo.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { NcmComponent } from './ncm/ncm.component';
import { UnidadeMedidaComponent } from './unidade-medida/unidade-medida.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './login/auth.service';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    GrupoComponent,
    DashboardComponent,
    HomeComponent,
    ProdutoComponent,
    NcmComponent,
    UnidadeMedidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ GrupoService, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
