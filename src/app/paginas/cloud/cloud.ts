import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Nuvem Dedicada para IoT e Redes Privadas (LoRaWAN, WiFi HaLow, Bluetooth e AirLink)');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Nuvem dedicada da SPACEALL para Internet das Coisas e redes privadas corporativas. Suporta LoRaWAN, WiFi HaLow, Bluetooth e AirLink, garantindo conectividade segura, escalável e integrada Edge-to-Cloud.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'IoT, Nuvem IoT, LoRaWAN, WiFi HaLow, Bluetooth, AirLink, redes privadas, conectividade empresarial, Edge Cloud, SPACEALL Angola'
    });

    /* ✅ ROBOTS */
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow'
    });

    /* ✅ AUTHOR */
    this.meta.addTag({
      name: 'author',
      content: 'SPACEALL'
    });

    /* ✅ OPEN GRAPH */
    this.meta.addTag({
      property: 'og:title',
      content: 'SPACEALL | Nuvem Dedicada para IoT e Redes Privadas (LoRaWAN, WiFi HaLow, Bluetooth e AirLink)'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Plataforma em nuvem da SPACEALL para IoT e redes privadas, ideal para empresas que precisam de conectividade segura e escalável com LoRaWAN, HaLow, Bluetooth e AirLink.'
    });

    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.addTag({
      property: 'og:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

    this.meta.addTag({
      property: 'og:url',
      content: 'https://spaceall.net/cloud'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Nuvem Dedicada para IoT e Redes Privadas'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Conectividade segura e escalável para IoT e redes privadas corporativas com LoRaWAN, WiFi HaLow, Bluetooth e AirLink.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
