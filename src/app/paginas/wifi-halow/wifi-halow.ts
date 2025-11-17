import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-wifi-halow',
  imports: [
    Menu,Rodape, Form
  ],
  templateUrl: './wifi-halow.html',
  styleUrl: './wifi-halow.css'
})
export class WifiHalow {

}
