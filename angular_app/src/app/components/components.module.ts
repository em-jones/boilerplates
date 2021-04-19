import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StencilComponentComponent } from './stencil-component/stencil-component.component';




@NgModule({
  declarations: [
    StencilComponentComponent
  ],
  exports: [StencilComponentComponent],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
