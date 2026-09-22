import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/seo/seo.service';
import { ATTORNEY_STRUCTURED_DATA } from '../../core/seo/attorney-schema';
import { Hero } from '../../sections/hero/hero';
import { About } from '../../sections/about/about';
import { PracticeAreas } from '../../sections/practice-areas/practice-areas';
import { Qualifications } from '../../sections/qualifications/qualifications';
import { ContactSection } from '../../sections/contact-section/contact-section';

@Component({
  selector: 'app-home',
  imports: [Hero, About, PracticeAreas, Qualifications, ContactSection],
  templateUrl: './home.html',
})
export class Home {
  constructor() {
    const seo = inject(SeoService);

    seo.setPageSeo({
      title: 'Paulo Fialho Dias | Advogado Trabalhista e Previdenciário em São José dos Campos',
      description:
        'Paulo Fialho Dias, advogado OAB/SP 392.706 especialista em Direito do Trabalho e Direito Previdenciário em São José dos Campos e Vale do Paraíba. Atendimento técnico, próximo e transparente.',
      path: '/',
    });
    seo.setStructuredData(ATTORNEY_STRUCTURED_DATA);
  }
}
