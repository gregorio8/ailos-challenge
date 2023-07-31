import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() buttonText: string = 'Texto';
  @Input() buttonStyle: any = {
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    fontSize: '16px',
    width: '210px',
    height: '48px',
    borderRadius: '2px',
    border: '1px solid transparent',
    fontWeight: 'normal',
    fontFamily: 'Arial, sans-serif',
    cursor: 'pointer'
  };

}
