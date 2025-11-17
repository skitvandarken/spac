import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-cloud',
  imports: [ Menu, Rodape, Form ],
  templateUrl: './cloud.html',
  styleUrl: './cloud.css'
})
export class Cloud {

}
