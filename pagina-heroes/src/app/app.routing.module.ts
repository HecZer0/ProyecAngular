import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { SobreNosotrosComponent } from "./components/sobre-nosotros/sobre-nosotros.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { PermissionsGuard } from "./guards/permissions.guard";
import { DataResolverService } from "./resolvers/data.resolver.service";
import { ContactReactiveComponent } from "./components/contact-reactive/contact-reactive.component";
import { CitiesComponent } from "./cities/cities.component";

const routes: Routes =[
    { path: '', redirectTo:'/home', pathMatch: 'full' },

    { path: 'contact-reactive', loadChildren: ()=> 
    import ('./components/contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)
},

    { path: 'contact-template/:id', component: ContactReactiveComponent },
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'sobre-nosotros', component: SobreNosotrosComponent },
    { path: 'users', component: UserComponent, canActivate: [PermissionsGuard],
    children: [
        {path: 'list', component: ListComponent},
        { path: 'details', component: DetailsComponent }
    ] 
    },
    { path: 'cities', component: CitiesComponent },
    { path: '**', component: PagenotfoundComponent },
    
];

@ NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}