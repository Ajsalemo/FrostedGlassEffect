import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassComponent } from '@components/glass/glass.component';

const routes: Routes = [
  { path: 'specs', component: GlassComponent },
  { path: 'photos', component: GlassComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
