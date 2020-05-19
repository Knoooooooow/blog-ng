import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppLayoutModule } from './components/layout/layout.module';
import { ExtensionsService } from './services/extensions.service';
import { HttpClientModule } from '@angular/common/http';

export function setupExtensions(appExtensionService: ExtensionsService): Function {
    return () => appExtensionService.load();
}
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppLayoutModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: setupExtensions,
            deps: [ExtensionsService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
