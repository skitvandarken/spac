import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Hero } from '../../layout/hero/hero';
import { Form } from '../../layout/form/form';
import { Rodape } from '../../layout/rodape/rodape';

@Component({
  selector: 'app-inicio',
  imports: [

    Menu, Hero, Form, Rodape, 
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
