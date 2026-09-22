import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.html',
  styleUrl: './qualifications.scss',
})
export class Qualifications {
  protected readonly postGraduate: string[] = [
    'Direito e Processo do Trabalho',
    'Direito Previdenciário Aplicado',
    'Direito Previdenciário',
    'Docência do Ensino Superior e Metodologias Ativas de Aprendizado',
  ];

  protected readonly institutional: string[] = [
    'Membro da Comissão de Direito do Trabalho da OAB/SP',
    '1º Congresso de Direito do Trabalho da 36ª Subseção da OAB/SP',
    'Palestrante — “Os Novos Rumos da Advocacia nos Direitos dos Autistas”',
  ];
}
