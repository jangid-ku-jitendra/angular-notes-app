import { Routes } from '@angular/router';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';

export const routes: Routes = [
    {
        path: "note/:id",
        component: NotesDetailsComponent
    }
];
