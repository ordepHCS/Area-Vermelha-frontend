import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './pages/login/loginn.component';
import { RegisterComponent } from './pages/register/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { ArticleComponent } from './components/article/article.component';
import { ComplaintComponent } from './components/complaint/complaint.component';
import { ViewComplaintComponent } from './components/view-complaint/view-complaint.component';
import { ComplaintsIdComponent } from './components/complaints-id/complaints-id.component';
import { AllComplaintsComponent } from './components/complaints-all/complaints-all.component';
import { RankingComplaintsComponent } from './components/ranking/ranking.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'choice', component: ChoiceComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'view', component: ViewComplaintComponent },
  { path: 'id', component: ComplaintsIdComponent},
  { path: 'all', component: AllComplaintsComponent},
  { path: 'ranking', component: RankingComplaintsComponent}
];

export const appRoutingProviders = [
  provideRouter(routes)
];
