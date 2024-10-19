import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingSyntaxesComponent } from './data-binding-syntaxes/data-binding-syntaxes.component';
import { CustomerComponent } from './customer/customer.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PipeNamePipe } from './CustomPipes/pipe-name.pipe';
import { SwitchCaseDemoComponent } from './switch-case-demo/switch-case-demo.component';
import { ConvertToCrorePipe } from './CustomPipes/convert-to-crore.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingDemoComponent } from './two-way-binding-demo/two-way-binding-demo.component';
import { DynamicImageComponent } from './dynamic-image/dynamic-image.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DataBindingSyntaxesComponent,
    CustomerComponent,
    PipesDemoComponent,
    PipeNamePipe,
    SwitchCaseDemoComponent,
    ConvertToCrorePipe,
    TemplateDrivenFormComponent,
    TwoWayBindingDemoComponent,
    DynamicImageComponent,
    ReactiveFormDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
