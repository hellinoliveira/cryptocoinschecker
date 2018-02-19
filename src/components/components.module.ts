import { ListCoinsModule } from './../pages/list-coins/list-coins.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular/module';

@NgModule({
	declarations: [ListCoinsModule],
	imports: [IonicModule],
	exports: [ListCoinsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
