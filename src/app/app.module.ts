import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEtudiantsComponent } from './etudiant-espace/list-etudiants/list-etudiants.component';
import { DetailEtudiantComponent } from './etudiant-espace/detail-etudiant/detail-etudiant.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MainContentComponent } from './views/main-content/main-content.component';
import { ChatFriendsComponent } from './communication/chat-friends/chat-friends.component';
import { ChatListComponent } from './communication/chat-list/chat-list.component';
import { ChatPanelComponent } from './communication/chat-panel/chat-panel.component';
import { ModalDashboardComponent } from './views/modal-dashboard/modal-dashboard.component';
import { InitialPageComponent } from './views/initial-page/initial-page.component';
import { ListStageComponent } from './stage-espace/list-stage/list-stage.component';
import { KanbanComponent } from './suivi-espace/kanban/kanban.component';
import { EtudiantProfilComponent } from './etudiant-espace/etudiant-profil/etudiant-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantsComponent,
    DetailEtudiantComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    ChatFriendsComponent,
    ChatListComponent,
    ChatPanelComponent,
    ModalDashboardComponent,
    InitialPageComponent,
    ListStageComponent,
    KanbanComponent,
    EtudiantProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
