import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Booktable } from './components/booktable/booktable.component';
import { Dashboard } from './dashboard/dashboard.component';
import { Header } from './header/header.component';
import { History } from './history/history.component';
import { NavBar } from './nav/nav.component';
import { Reserve } from './reserve/reserve.component';
import { TableDataFilter } from 'src/Util/filter';


@NgModule({
  declarations: [
    AppComponent,
    Booktable,
    Dashboard,
    Header,
    History,
    NavBar,
    Reserve,
    TableDataFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
