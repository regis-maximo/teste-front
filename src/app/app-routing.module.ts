import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CnpjComponent } from './views/cnpj/cnpj.component';
import { HomeComponent } from './views/home/home.component';
import { MediaComponent } from './views/media/media.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cnpj', component: CnpjComponent },
  { path: 'media', component: MediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
