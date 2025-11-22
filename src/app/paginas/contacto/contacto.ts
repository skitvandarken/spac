import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle('SPACEALL | Contacto e Suporte Corporativo');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Entre em contacto com a SPACEALL para suporte técnico, informações comerciais e assistência especializada em soluções de IoT, Internet e Cloud para empresas em Angola.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'Contacto SPACEALL, Suporte técnico, Atendimento ao cliente, IoT Angola, Internet corporativa, Cloud corporativa, serviços empresariais'
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
      content: 'SPACEALL | Contacto e Suporte Corporativo'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Suporte e contacto especializado da SPACEALL para empresas em Angola. Soluções IoT, Internet e Cloud corporativa.'
    });

    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.addTag({
      property: 'og:image',
      content: 'https://spaceall.net/img/contacto-banner.jpg'
    });

    this.meta.addTag({
      property: 'og:url',
      content: 'https://spaceall.net/contacto'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Contacto e Suporte Corporativo'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Entre em contacto com a SPACEALL para suporte técnico e informações sobre soluções de IoT, Internet e Cloud para empresas em Angola.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/img/contacto-banner.jpg'
    });

  }

}
