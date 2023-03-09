import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaileyComponent } from './pages/artists/railey/railey.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { StoryComponent } from './pages/story/story.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'impressum', component:ImpressumComponent},
  {path:'story', component:StoryComponent},
  {path:'privacy', component:PrivacyComponent},
  {path:'artist', children:[
    {path:'railey', component:RaileyComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }