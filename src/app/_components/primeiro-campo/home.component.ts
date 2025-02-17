import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-primeiro',
  imports: [CommonModule, RouterLink, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class PrimeiroComponent {
  text1: string = 'O samba, originário dos batuques africanos, é um símbolo nacional e foi fundamental na formação da identidade cultural brasileira.';

  text2: string = 'Os quilombos, como o de Palmares liderado por Zumbi, foram espaços de liberdade e organização social.';

  text3: string = 'O sincretismo entre religiões africanas e o catolicismo resultou em práticas únicas, como a associação de orixás a santos católicos.';

  text4: string = 'Técnicas agrícolas africanas, como o cultivo de mandioca e milho, foram adaptadas no Brasil.';

  text5: string = 'O racismo está enraizado nas instituições, limitando oportunidades para a população negra.';
}
