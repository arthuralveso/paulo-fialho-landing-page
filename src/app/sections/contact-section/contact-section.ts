import { Component, inject, signal } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { ContactService } from '../../core/contact/contact.service';

interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [FormField],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  protected readonly contact = inject(ContactService);

  private readonly model = signal<ContactFormModel>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  protected readonly contactForm = form(this.model, (schemaPath) => {
    required(schemaPath.name, { message: 'Informe seu nome completo' });
    required(schemaPath.email, { message: 'Informe seu e-mail' });
    email(schemaPath.email, { message: 'Informe um e-mail válido' });
  });

  protected onSubmit(event: Event): void {
    event.preventDefault();

    void submit(this.contactForm, async () => {
      window.location.href = this.contact.buildMailtoUrl(this.model());
    });
  }
}
