import { Routes } from '@angular/router';
import { Home } from './routes/home/home';
import { Editor } from './routes/editor/editor';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'editor',
        component: Editor
    },
];
