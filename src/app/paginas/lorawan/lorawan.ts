import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-lorawan',
  imports: [

    Menu, Rodape, Form
  ],
  templateUrl: './lorawan.html',
  styleUrl: './lorawan.css'
})
export class Lorawan {

}
