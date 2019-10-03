import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {CalculatorFormComponent} from './components/tabs/calculator-tab/calculator-form/calculator-form.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalculatorResultsComponent} from './components/tabs/calculator-tab/calculator-results/calculator-results.component';
import {StaticAttributesTabComponent} from './components/tabs/static-attributes-tab/static-attributes-tab.component';
import {MaterialModule} from './material/material.module';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';
import {WelcomeTabComponent} from './components/tabs/welcome-tab/welcome-tab.component';
import {CalculatorTabComponent} from './components/tabs/calculator-tab/calculator-tab.component';
import {HeaderComponent} from './components/header/header.component';
import {BodyComponent} from './components/body/body.component';
import {FooterComponent} from './components/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    CalculatorFormComponent,
    CalculatorResultsComponent,
    StaticAttributesTabComponent,
    WelcomeTabComponent,
    CalculatorTabComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
