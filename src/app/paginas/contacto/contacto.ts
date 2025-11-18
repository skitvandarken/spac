import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-contacto',
  imports: [
 Menu, Rodape, Form

  ],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
