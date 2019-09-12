import {NgModule} from '@angular/core'
import { Routes, RouterModule} from '@angular/router'
import {SiteComponent} from './auth/site/site.component'
import {AboutComponent} from './auth/about/about.component'
import { HobbiesComponent } from './auth/hobbies/hobbies.component';
import { ContactComponent } from './auth/contact/contact.component';

const appRoutes: Routes =[
    {
path: '',
redirectTo: '/home',
pathMatch: 'full'
    },
    {
        path: 'home',
        component: SiteComponent
    },{
        path: 'about',
        component: AboutComponent
    },{
        path: 'hobbies',
        component: HobbiesComponent
    },{
        path: 'contact',
        component: ContactComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}