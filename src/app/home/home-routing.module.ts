import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    //para que el módulo sea exportable y otros modulos lo puedan usar
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}