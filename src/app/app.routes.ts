import { Routes } from '@angular/router';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: "note/:id",
        component: NotesDetailsComponent
    },
    {
        path: "",
        component: MainComponent
    }
];
