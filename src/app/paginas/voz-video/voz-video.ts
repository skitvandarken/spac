import { Component } from '@angular/core';
import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-voz-video',
  imports: [

    Menu, Rodape, Form
  ],
  templateUrl: './voz-video.html',
  styleUrl: './voz-video.css'
})
export class VozVideo {

}
