import { Component, OnInit } from '@angular/core';
import { IconsArray } from '../utils/constants/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  icons: Array<any> = IconsArray;

  constructor(private router: Router) {}

  ngOnInit() {

  }

  /**  
   * Essa função seria implementada em uma possível continuação,
   * onde iria usar o router atrelado aos icons para mudança de visualização
   * @autor Pedro Gregorio 
  */
  redirect(icon: string) {
    // this.router.navigate([`/${icon}`])
    console.log('redirect ->', icon);
  }

}
