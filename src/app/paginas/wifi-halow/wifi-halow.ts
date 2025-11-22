import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Menu } from '../../layout/menu/menu';
import { Rodape } from '../../layout/rodape/rodape';
import { Form } from '../../layout/form/form';

@Component({
  selector: 'app-wifi-halow',
  imports: [
    Menu,
    Rodape,
    Form
  ],
  templateUrl: './wifi-halow.html',
  styleUrl: './wifi-halow.css'
})
export class WifiHalow {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    /* ✅ TITLE (Google) */
    this.title.setTitle('SPACEALL | Internet e WLAN de Banda Média para Empresas em Angola');

    /* ✅ META DESCRIPTION */
    this.meta.addTag({
      name: 'description',
      content: 'WiFi HaLow para conectividade rural e corporativa de longo alcance. Ideal para backhaul, extensão de LAN, zonas remotas e integração Edge-to-Cloud com baixo custo e alta estabilidade.'
    });

    /* ✅ KEYWORDS */
    this.meta.addTag({
      name: 'keywords',
      content: 'WiFi HaLow, Internet rural, conectividade de longo alcance, backhaul sem fio, Edge Computing, Internet para fazendas, conexão para zonas remotas, IoT rural, extensão de rede corporativa'
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

    /* ✅ OPEN GRAPH — Facebook, WhatsApp, LinkedIn */
    this.meta.addTag({
      property: 'og:title',
      content: 'SPACEALL | Internet e WLAN de Banda Média para Empresas em Angola'
    });

    this.meta.addTag({
      property: 'og:description',
      content: 'Solução de conectividade WiFi HaLow para zonas rurais e corporativas com grande alcance, estabilidade e baixo custo operacional.'
    });

    this.meta.addTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.addTag({
      property: 'og:image',
      content: 'https://spaceall.net/img/halow-banner.jpg'
    });

    this.meta.addTag({
      property: 'og:url',
      content: 'https://spaceall.net/wifi-halow'
    });

    /* ✅ TWITTER CARD */
    this.meta.addTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.addTag({
      name: 'twitter:title',
      content: 'SPACEALL | Internet e WLAN de Banda Média para Empresas em Angola'
    });

    this.meta.addTag({
      name: 'twitter:description',
      content: 'Internet de médio alcance para zonas afastadas e ambientes industriais com tecnologia WiFi HaLow.'
    });

    this.meta.addTag({
      name: 'twitter:image',
      content: 'https://spaceall.net/img/halow-banner.jpg'
    });
  }

}
