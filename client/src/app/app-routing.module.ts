import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlassComponent } from '@components/glass/glass.component';
import { PhotosComponent } from '@components/photos/photos.component';
import { SpecsComponent } from '@components/specs/specs.component';

const routes: Routes = [
  { path: '', component: GlassComponent },
  { path: 'specs', component: SpecsComponent, pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
