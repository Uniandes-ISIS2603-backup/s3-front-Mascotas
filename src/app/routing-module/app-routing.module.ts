import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MascotaAdopcionListComponent} from '../mascota-adopcion/mascota-adopcion-list/mascota-adopcion-list.component';
import {MascotaVentaListComponent} from '../mascota-venta/mascota-venta-list/mascota-venta-list.component';
import {RazaDetailComponent} from '../raza/raza-detail/raza-detail.component';
import { RazaListComponent } from '../raza/raza-list/raza-list.component';
import {EspecieListComponent} from '../especie/especie-list/especie-list.component';
 

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
        path: 'especie',
        children: [
            {
                path: 'list',
                component: EspecieListComponent
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
    {
        path: 'razas',
        children : [
            {
                path: 'list',
                component: RazaListComponent
            },
            {
                path : ':id',
                component : RazaDetailComponent
            }
        ]
    }
   
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
