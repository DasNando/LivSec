import { NgModule } from '@angular/core';

import { LivSecSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LivSecSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LivSecSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LivSecSharedCommonModule {}
