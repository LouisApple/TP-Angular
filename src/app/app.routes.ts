import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {SpeciesListComponent} from "./species/species-list/species-list.component";
import {SpeciesDetailsComponent} from "./species/species-details/species-details.component";
import {SpeciesEditComponent} from "./species/species-edit/species-edit.component";
import {SpeciesCreateComponent} from "./species/species-create/species-create.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'species', component: SpeciesListComponent, canActivate: [AuthGuard]},
  {path: 'species/details/:id', component: SpeciesDetailsComponent, canActivate: [AuthGuard]},
  {path: 'species/edit/:id', component: SpeciesEditComponent, canActivate: [AuthGuard]},
  {path: 'species/create', component: SpeciesCreateComponent, canActivate: [AuthGuard]},
];
