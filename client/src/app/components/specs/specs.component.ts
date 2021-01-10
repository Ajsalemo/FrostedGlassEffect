import { Component, OnInit } from '@angular/core';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
})
export class SpecsComponent implements OnInit {
  carImageFront = 'assets/images/m235i_front.png';
  errorStatus = '';
  errorStatusText = '';
  isError = false;

  constructor(private getSpecificationsService: GetSpecificationsService) {}

  ngOnInit() {
    this.isError = false;
    this.getSpecificationsService.getSpecifications().subscribe(
      (res: object) => {
        this.isError = false;
        console.log(res);
      },
      (err: any) => {
        console.log(err)
        this.isError = true;
        this.errorStatus = err.status;
        this.errorStatusText = err.statusText;
      }
    );
  }
}
