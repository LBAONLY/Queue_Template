import { Routes } from '@angular/router';
import { BnavOneComponent } from './bnav-one/bnav-one.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { BodyQueueComponent } from './body-queue/body-queue.component';


export const appRoutes: Routes = [
    { path: '', component: BodyHomeComponent , data: {depth: 2}},
    { path: 'queue', component: BodyQueueComponent , data: {depth: 1}},
//     { path: '',
//       runGuardsAndResolvers: 'always',
//       canActivate: [AuthGuard],
//       children: [
//         { path: 'members', component: MemberListComponent },
//         { path: 'messages', component: MessagesComponent },
//         { path: 'lists', component: ListsComponent },
//       ]
//     },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
