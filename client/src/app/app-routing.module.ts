import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlassComponent } from '@components/glass/glass.component';
import { SpecsComponent } from '@components/specs/specs.component';

const routes: Routes = [
  { path: '', component: GlassComponent },
  { path: 'specs', component: SpecsComponent, pathMatch: 'full' },
  { path: 'photos', component: GlassComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
