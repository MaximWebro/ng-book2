import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductRowComponent} from './products-list/product-row/product-row.component';
import {ProductImageComponent} from './products-list/product-row/product-image/product-image.component';
import {ProductDepartamentComponent} from './products-list/product-row/product-departament/product-departament.component';
import {PriceDisplayComponent} from './products-list/product-row/price-display/price-display.component';
import {FormSkuComponent} from './form-sku/form-sku.component';
import {FormBuilderComponent} from './form-builder/form-builder.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductsListComponent,
        ProductRowComponent,
        ProductImageComponent,
        ProductDepartamentComponent,
        PriceDisplayComponent,
        FormSkuComponent,
        FormBuilderComponent,
        FormBuilder,
        FormGroup
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
