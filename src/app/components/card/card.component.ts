import { Component, Input } from '@angular/core';
import { ICardInfo } from '../../utils/interfaces/card-input.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() userData: ICardInfo | null = null;

  constructor() {

  }

  ngOnInit() {
    console.log('aa', this.userData);
  }
}
