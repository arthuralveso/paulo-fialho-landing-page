import { Component } from '@angular/core';

interface PracticeArea {
  index: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-practice-areas',
  templateUrl: './practice-areas.html',
  styleUrl: './practice-areas.scss',
})
export class PracticeAreas {
  protected readonly areas: PracticeArea[] = [
    {
      index: '01',
      title: 'Direito do Trabalho',
      description:
        'Horas extras, adicionais de insalubridade e periculosidade e ações acidentárias.',
    },
    {
      index: '02',
      title: 'Direito Previdenciário',
      description: 'Aposentadorias, benefícios por incapacidade e planejamento previdenciário.',
    },
  ];
}
