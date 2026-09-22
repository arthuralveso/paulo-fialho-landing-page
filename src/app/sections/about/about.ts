import { Component } from '@angular/core';

interface Credential {
  label: string;
  value: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly credentials: Credential[] = [
    { label: 'Formação', value: 'Bacharel em Direito (2016)' },
    { label: 'Registro profissional', value: 'OAB/SP 392.706' },
    {
      label: 'Especialização',
      value: 'Direito e Processo do Trabalho e Direito Previdenciário',
    },
    { label: 'Atuação', value: 'Desde 2016' },
  ];
}
