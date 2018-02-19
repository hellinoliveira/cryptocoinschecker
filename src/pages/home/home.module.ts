import { ListCoinsModule } from './../list-coins/list-coins.module';
import { HomePage } from './home';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
    declarations: [
        HomePage, ListCoinsModule
    ],
    imports: [IonicModule,
        IonicPageModule.forChild(HomePage),
    ],
    exports: [
        HomePage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }