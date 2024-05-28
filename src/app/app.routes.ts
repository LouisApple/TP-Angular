import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./auth.guard";
import {SpeciesListComponent} from "./species/species-list/species-list.component";
import {SpeciesDetailsComponent} from "./species/species-details/species-details.component";
import {SpeciesEditComponent} from "./species/species-edit/species-edit.component";
import {SpeciesCreateComponent} from "./species/species-create/species-create.component";
import {AnimalListComponent} from "./animals/animals-list/animals-list.component";
import {AnimalCreateComponent} from "./animals/animals-create/animal-create.component";
import {PersonListComponent} from "./persons/person-list/person-list.component";
import {PersonDetailsComponent} from "./persons/person-details/person-details.component";
import {PersonEditComponent} from "./persons/person-edit/person-edit.component";
import {PersonCreateComponent} from "./persons/person-create/person-create.component";

import {AnimalsEditComponent} from "./animals/species-edit/animals-edit.component";
import {AnimalsDetailsComponent} from "./animals/animals-detail/animals-details.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'species', component: SpeciesListComponent, canActivate: [AuthGuard]},
  {path: 'species/details/:id', component: SpeciesDetailsComponent, canActivate: [AuthGuard]},
  {path: 'species/edit/:id', component: SpeciesEditComponent, canActivate: [AuthGuard]},
  {path: 'species/create', component: SpeciesCreateComponent, canActivate: [AuthGuard]},
  {path: 'animals', component: AnimalListComponent, canActivate: [AuthGuard]},
  {path: 'animals/add', component: AnimalCreateComponent, canActivate: [AuthGuard]},
  {path: 'person', component: PersonListComponent, canActivate: [AuthGuard]},
  {path: 'person/details/:id', component: PersonDetailsComponent, canActivate: [AuthGuard]},
  {path: 'person/edit/:id', component: PersonEditComponent, canActivate: [AuthGuard]},
  {path: 'person/create', component: PersonCreateComponent, canActivate: [AuthGuard]},

  {path: 'animals/edit/:id', component: AnimalsEditComponent, canActivate: [AuthGuard]},
  {path: 'animals/details/:id', component: AnimalsDetailsComponent, canActivate: [AuthGuard]},

];
