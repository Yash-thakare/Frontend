import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleWebPageComponent } from './sample-web-page/sample-web-page.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { logingaurdGuard } from './logingaurd.guard';

const routes: Routes = [
  {path : "",component:RegisterComponent},
  {path : "login",component:LoginComponent},
  {path : "register",component:RegisterComponent},
  {path : "sampleWebPage",component:SampleWebPageComponent,canActivate:[logingaurdGuard]},
  {path : "forgetpassword",component:ForgetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
