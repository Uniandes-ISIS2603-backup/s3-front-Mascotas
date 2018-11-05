import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

//MascotaVenta
import {MascotaVentaListComponent} from '../mascota-venta/mascota-venta-list/mascota-venta-list.component';
import {MascotaVentaDetailComponent} from '../mascota-venta/mascota-venta-detail/mascota-venta-detail.component';
import {MascotaVentaCreateComponent} from '../mascota-venta/mascota-venta-create/mascota-venta-create.component';


//Raza
import {RazaDetailComponent} from '../raza/raza-detail/raza-detail.component';
import {RazaListComponent } from '../raza/raza-list/raza-list.component';
import {RazaCreateComponent} from '../raza/raza-create/raza-create.component';


//Especie
import {EspecieListComponent} from '../especie/especie-list/especie-list.component';
import {EspecieCreateComponent} from '../especie/especie-create/especie-create.component';
import {EspecieDetailComponent} from '../especie/especie-detail/especie-detail.component';

//Mascota
import {MascotaDetailComponent} from '../mascota/mascota-detail/mascota-detail.component';
import {MascotaListComponent} from '../mascota/mascota-list/mascota-list.component';
import {MascotaCreateComponent} from '../mascota/mascota-create/mascota-create.component';

//Historia
import {HistoriaDetailComponent} from '../historia/historia-detail/historia-detail.component';
import {HistoriaListComponent} from '../historia/historia-list/historia-list.component';
import {HistoriaCreateComponent} from '../historia/historia-create/historia-create.component';







const routes: Routes = [

    {
        path: 'especie',
        children: [
            {
                path: 'list',
                component: EspecieListComponent
            },
            {
                path: 'create',
                component: EspecieCreateComponent
            },
            {
                path: ':id',
                component: EspecieDetailComponent
            }
            
        ]
    },
    {
        path: 'mascotaVenta',
        children: [
            {
                path: 'list',
                component: MascotaVentaListComponent
            },
            {
                path: 'create',
                component: MascotaVentaCreateComponent
            },
            {
                path: ':id',
                component: MascotaVentaDetailComponent
            },
            
        ]
    },
    {
        path: 'raza',
        children : [
            {
                path: 'list',
                component: RazaListComponent
            } ,

            {
                path : 'create',
                component: RazaCreateComponent
            } ,

            {
                path : ':id',
                component : RazaDetailComponent
            }
            
        ]
    },
    {
        path: 'mascota',
        children : [
            {
                path: 'list',
                component: MascotaListComponent
            } ,
            
            {
                path : 'create',
                component : MascotaCreateComponent
            }
        ]
    }, 
    {
        path: 'historia',
        children : [
            {
                path: 'list',
                component: HistoriaListComponent
            },
            {
                path: 'create',
                component: HistoriaCreateComponent
            },
            {
                path : ':id',
                component : HistoriaDetailComponent
            },
            
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
