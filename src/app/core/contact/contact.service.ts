import { Service } from '@angular/core';

export interface ContactMessage {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/** Single source of truth for the office's contact details and outbound contact links. */
@Service()
export class ContactService {
  readonly phoneDisplay = '+55 (12) 98136-4325';
  readonly whatsappNumber = '5512981364325';
  readonly whatsappUrl = `https://wa.me/${this.whatsappNumber}`;
  readonly email = 'paulofialhodiasadvogado@gmail.com';
  readonly location = 'São José dos Campos/SP · Vale do Paraíba';

  buildMailtoUrl(data: ContactMessage): string {
    const subject = data.subject.trim() || 'Contato pelo site';
    const body = [
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefone: ${data.phone}`,
      '',
      data.message,
    ].join('\n');

    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
