import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './views/home/home.component';
import { CnpjComponent } from './views/cnpj/cnpj.component';
import { MediaComponent } from './views/media/media.component';
import { NavComponent } from './views/nav/nav.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CnpjComponent,
    MediaComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(maskConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
