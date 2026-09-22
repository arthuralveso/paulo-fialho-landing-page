import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/contact/contact.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButton {
  protected readonly contact = inject(ContactService);
}
