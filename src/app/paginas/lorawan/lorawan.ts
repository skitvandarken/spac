import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-lorawan',
  imports: [
    Menu,
    Rodape,
    Form
  ],
  templateUrl: './lorawan.html',
  styleUrl: './lorawan.css'
})
export class Lorawan {

  constructor(
    private meta: Meta,
    private title: Title
  ) {

    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Conectividade LoRaWAN para IoT Empresarial em Angola');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Conectividade LoRaWAN para IoT Empresarial em Angola. Monitorização remota, sensores inteligentes, smart metering e automação com baixo consumo e longo alcance.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'LoRaWAN Angola, IoT Empresarial, rede de sensores, smart city Angola, smart agriculture, medição remota, LPWAN, conectividade de longo alcance, SPACEALL'
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
      content: 'SPACEALL | Conectividade LoRaWAN para IoT Empresarial em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Soluções LoRaWAN para IoT Empresarial em Angola, ideais para agricultura, energia, cidades inteligentes e indústria.'
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
      content: 'https://spaceall.net/lorawan'
    });

    /* ✅ TWITTER */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Conectividade LoRaWAN para IoT Empresarial em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Conectividade LoRaWAN de longo alcance e baixo consumo para soluções IoT empresariais.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
