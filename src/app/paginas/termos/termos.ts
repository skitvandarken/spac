import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';

@Component({
  selector: 'app-termos',
  imports: [

    Menu, Rodape

  ],
  templateUrl: './termos.html',
  styleUrl: './termos.css'
})
export class Termos {

}
