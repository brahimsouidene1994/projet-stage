import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailEtudiantComponent } from './etudiant-espace/detail-etudiant/detail-etudiant.component';
import { EtudiantProfilComponent } from './etudiant-espace/etudiant-profil/etudiant-profil.component';
import { ListEtudiantsComponent } from './etudiant-espace/list-etudiants/list-etudiants.component';
import { ListStageComponent } from './stage-espace/list-stage/list-stage.component';
import { KanbanComponent } from './suivi-espace/kanban/kanban.component';
import { InitialPageComponent } from './views/initial-page/initial-page.component';

const routes: Routes = [
  {path : 'detail-etudiant', component : DetailEtudiantComponent},
  {path : 'list-etudiant', component : ListEtudiantsComponent},
  {path : 'etudiant-profil', component : EtudiantProfilComponent},
  {path : 'list-stage', component : ListStageComponent},
  {path : 'kanban-board', component : KanbanComponent},
  {path : 'initial', component : InitialPageComponent},
  {path : '' , redirectTo : '/initial', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
