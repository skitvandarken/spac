import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-voz-video',
  imports: [
    Menu,
    Rodape,
    Form
  ],
  templateUrl: './voz-video.html',
  styleUrl: './voz-video.css'
})
export class VozVideo {

  constructor(
    private meta: Meta,
    private title: Title
  ) {

    /* ✅ TITLE (Google) */
    this.title.setTitle('SPACEALL | Serviços de Voz & Vídeo para Empresa em Angola');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'Serviços de Voz e Vídeo para empresas em Angola, com comunicação segura, escalável e integrada às suas infraestruturas corporativas e cloud.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'Serviços de Voz, Serviços de Vídeo, VoIP Angola, Telecomunicações empresariais, videoconferência Angola, comunicações unificadas, telefonia IP, call center IP, comunicação corporativa, SPACEALL Angola'
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
      content: 'SPACEALL | Serviços de Voz & Vídeo para Empresas em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Soluções de comunicação corporativa com Voz e Vídeo em alta qualidade, seguras e integradas à cloud para empresas em Angola.'
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
      content: 'https://spaceall.net/voz-video'
    });

    /* ✅ TWITTER */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Serviços de Voz & Vídeo para Empresas em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Comunicação empresarial avançada com serviços de Voz & Vídeo integrados à sua infraestrutura.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
