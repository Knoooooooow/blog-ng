import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from 'src/app/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from '../main/main.component';
import { ShowComponent } from '../show/show.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
// import { CoreModule } from 'src/app/shared/core.module';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'index',
                component: MainComponent
            },{
                path: 'show',
                component: ShowComponent
            },{
                path: '',
                redirectTo: `index`,
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule({
    declarations: [
        LayoutComponent,
        NavBarComponent,
        SideBarComponent,
        MainComponent,
        ShowComponent,
        DynamicComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule.forChild(routes)
        // CoreModule.forChild()
    ],
    exports: [LayoutComponent]
})
export class AppLayoutModule { }
