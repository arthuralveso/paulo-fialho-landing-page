import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ContactService } from '../../core/contact/contact.service';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly contact = inject(ContactService);
}
