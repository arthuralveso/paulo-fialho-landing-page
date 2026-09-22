import { SITE_URL } from './seo.service';

/** schema.org Attorney structured data — powers Google rich results and the Knowledge Panel. */
export const ATTORNEY_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Attorney',
  name: 'Paulo Fialho Dias',
  alternateName: 'Paulo Fialho Dias Advogado',
  url: SITE_URL,
  image: `${SITE_URL}/images/paulo-fialho.jpg`,
  telephone: '+55-12-98136-4325',
  email: 'paulofialhodiasadvogado@gmail.com',
  description:
    'Advogado especialista em Direito do Trabalho e Direito Previdenciário, atuante desde 2016 em São José dos Campos e no Vale do Paraíba.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São José dos Campos',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'Place',
    name: 'São José dos Campos e Vale do Paraíba, SP',
  },
  knowsAbout: ['Direito do Trabalho', 'Direito Previdenciário'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Registro profissional',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ordem dos Advogados do Brasil - Seção São Paulo (OAB/SP)',
    },
    identifier: '392.706',
  },
} as const;
