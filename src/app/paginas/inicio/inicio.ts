import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Menu } from '../../layout/menu/menu';
import { Hero } from '../../layout/hero/hero';
import { Form } from '../../layout/form/form';
import { Rodape } from '../../layout/rodape/rodape';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-inicio',
  imports: [
    Menu, Hero, Form, Rodape,
    RouterLink
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE */
    this.title.setTitle(' ');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'SPACEALL fornece soluções de conectividade empresarial em Angola com LoRaWAN, Wi-Fi, Internet de Banda Média e Cloud Corporativa. Conectividade segura, escalável e confiável para empresas.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'LoRaWAN, Wi-Fi, Internet corporativa, Cloud, IoT Angola, conectividade empresarial, redes corporativas, SPACEALL'
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
      content: 'SPACEALL | LoRaWAN, Wi-Fi, Internet e Cloud para Empresas em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Conectividade empresarial em Angola com LoRaWAN, Wi-Fi, Internet de Banda Média e Cloud Corporativa. Soluções seguras, escaláveis e confiáveis.'
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
      content: 'https://spaceall.net/'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | LoRaWAN, Wi-Fi, Internet e Cloud para Empresas em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Soluções de conectividade empresarial com LoRaWAN, Wi-Fi, Internet e Cloud, seguras e escaláveis para empresas em Angola.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/images/cover-spaceall.jpg'
    });

  }

}
