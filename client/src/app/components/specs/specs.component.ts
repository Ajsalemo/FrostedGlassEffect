import { Component, OnInit } from '@angular/core';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
})
export class SpecsComponent implements OnInit {
  carImageFront = 'assets/images/m235i_front.png';

  constructor(private getSpecificationsService: GetSpecificationsService) {}

  ngOnInit() {
    this.getSpecificationsService.getSpecifications();
  }
}
