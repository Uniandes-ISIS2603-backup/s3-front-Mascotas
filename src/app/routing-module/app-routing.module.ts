import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MascotaAdopcionListComponent} from '../mascota-adopcion/mascota-adopcion-list/mascota-adopcion-list.component';
import {MascotaVentaListComponent} from '../mascota-venta/mascota-venta-list/mascota-venta-list.component';
 

const routes: Routes = [
    
    {
        path: 'mascotasAdopcion',
        children: [
            {
                path: 'list',
                component: MascotaAdopcionListComponent
            }
        ]
    },
    {
        path: 'mascotasVenta',
        children: [
            {
                path: 'list',
                component: MascotaVentaListComponent
            }
        ]
    },
   
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
    
}
