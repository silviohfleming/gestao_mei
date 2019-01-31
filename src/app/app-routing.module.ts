import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrupoComponent } from './grupo/grupo.component';
import { HomeComponent } from './home/home.component';
import {ProdutoComponent} from './produto/produto.component';
import {UnidadeMedidaComponent} from './unidade-medida/unidade-medida.component';
import {NcmComponent} from './ncm/ncm.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  { path: 'grupo', component: GrupoComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'produto', component: ProdutoComponent, canActivate: [AuthGuard] },
  { path: 'unidade-medida', component: UnidadeMedidaComponent, canActivate: [AuthGuard] },
  { path: 'ncm', component: NcmComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
