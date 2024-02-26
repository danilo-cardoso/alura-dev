import { Routes } from '@angular/router';
import { CodeEditorComponent } from './pages/code-editor/code-editor.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'editor', component: CodeEditorComponent},
  {path: 'community', component: CommunityComponent},
  { path: '**', redirectTo: 'editor' }
];
