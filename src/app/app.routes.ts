import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';

import { Lorawan } from './paginas/lorawan/lorawan';
import { WifiHalow } from './paginas/wifi-halow/wifi-halow';
import { VozVideo } from './paginas/voz-video/voz-video';
import { Cloud } from './paginas/cloud/cloud';
import { Termos } from './paginas/termos/termos';
import { Pprivacidade } from './paginas/pprivacidade/pprivacidade';
import { Contacto } from './paginas/contacto/contacto';

export const routes: Routes = [

    {path:'', component: Inicio},
    {path: 'lorawan', component: Lorawan},
    {path: 'wifi_halow', component: WifiHalow},
    {path: 'voz_video', component: VozVideo},
    {path:'cloud', component: Cloud},
    {path: 'termos', component: Termos },
    {path: 'politicas', component: Pprivacidade },
    {path: 'contacto', component: Contacto}
  
    
    

];
