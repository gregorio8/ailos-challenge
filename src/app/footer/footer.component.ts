import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() userData: any;
  @Input() hasChanged: boolean = false;
  @Output() emitData: any = new EventEmitter();

  emitNextStep() {
    this.emitData.emit();
    this.hasChanged = true;
  }

}
