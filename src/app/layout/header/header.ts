import { Component, inject } from '@angular/core';
import { ContactService } from '../../core/contact/contact.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly contact = inject(ContactService);
}
