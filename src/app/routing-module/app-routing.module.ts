import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';


//Raza
import {RazaDetailComponent} from '../raza/raza-detail/raza-detail.component';
import {RazaListComponent } from '../raza/raza-list/raza-list.component';
import {RazaCreateComponent} from '../raza/raza-create/raza-create.component';


//Especie
import {EspecieListComponent} from '../especie/especie-list/especie-list.component';
import {EspecieCreateComponent} from '../especie/especie-create/especie-create.component';
import {EspecieDetailComponent} from '../especie/especie-detail/especie-detail.component';

//Mascota
import {MascotaListComponent} from '../mascota/mascota-list/mascota-list.component';
import {MascotaCreateComponent} from '../mascota/mascota-create/mascota-create.component';

//Historia
import {HistoriaDetailComponent} from '../historia/historia-detail/historia-detail.component';
import {HistoriaListComponent} from '../historia/historia-list/historia-list.component';
import {HistoriaCreateComponent} from '../historia/historia-create/historia-create.component';
import { CalificacionListComponent } from '../calificacion/calificacion-list/calificacion-list.component';
import { CalificacionCreateComponent } from '../calificacion/calificacion-create/calificacion-create.component';
import {CompraListComponent} from '../compra/compra-list/compra-list.component';
import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {CompraCreateComponent} from '../compra/compra-create/compra-create.component';
import {CompraDetailComponent} from '../compra/compra-detail/compra-detail.component';


import { LoginComponent } from '../auth/login/login.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';








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
                component: EspecieCreateComponent,
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: ':id',
                component: EspecieDetailComponent
            }
        ]
    },
  {
    path: 'compra',
    children: [
      {
        path: 'list',
        component: CompraListComponent
      },
      {
        path: 'create',
        component: CompraCreateComponent
      },
      {
        path: ':id',
        component: CompraCreateComponent
      }
    ]
  },
    {
        path: 'cliente',
        children: [
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: 'create',
                component: ClienteCreateComponent
            },
            {
                path: ':id',
                component: ClienteDetailComponent
            }
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
            },
            {
                path : 'create',
                component : MascotaCreateComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }

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
    },
    {
        path: 'calificacion',
        children : [
            {
                path: 'list',
                component: CalificacionListComponent
            },
            {
                path: 'create',
                component: CalificacionCreateComponent
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: SignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: MascotaListComponent
    },
    {
        path: '**',
        redirectTo: 'home',
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
