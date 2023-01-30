import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: ` 
  <ul class="list-group">
  <li class="list-group-item mt-1" (click)="onCitySelected(city)"
    [ngClass]="{'active': city === selection}">
    {{city | titlecase}}
    <!-- P I P E {{city | titlecase}} -->

      <button (click)="onCityDelete('1')"
      class="btn btn-danger float-end" type="button">Delete</button>
  </li>
</ul>`,
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string; //los input pueden ser opcionales
  @Input() selection!: string;
  @Output() citySelectedEvent = new EventEmitter<string>();
  @Output() cityDeleteEvent = new EventEmitter<string>();

  onCitySelected(city: string): void {
    this.citySelectedEvent.emit(city);
  }

  onCityDelete(id: string):void{
    this.cityDeleteEvent.emit(id );
  }
  
}
