import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GetSpecificationsService } from '@services/getspecifications.service.ts';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class SpecsComponent implements OnInit {
  carImageFront = 'assets/images/m235i_front.png';
  carSpecificationsRes: any;
  Object = Object;
  errorStatus = '';
  errorStatusText = '';
  isError = false;
  isLoading = false;

  constructor(private getSpecificationsService: GetSpecificationsService) {}

  getSpecificationsOnLoad(): void {
    this.isError = false;
    this.isLoading = true;
    this.getSpecificationsService.getSpecifications().subscribe(
      (res: any) => {
        this.isError = false;
        this.isLoading = false;
        this.carSpecificationsRes = this.filterSpecificationResponse(res[0]);
      },
      (err: any) => {
        this.isError = true;
        this.isLoading = false;
        this.errorStatus = err.status;
        this.errorStatusText = err.statusText;
      }
    );
  }

  // TODO - implement further response filtering/prettify
  // Function that removes any uneeded properties, underscores and 'prettifies' the response in terms of capitalization.
  filterSpecificationResponse(res: any): void {
    const { id, ...rest } = res;
    return rest;
  }

  ngOnInit() {
    this.getSpecificationsOnLoad();
  }
}
