import { Component, Input } from '@angular/core';
import {
  faEnvelope,
  faMapMarked,
  faPhone,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() user;
  faEnvelope = faEnvelope;
  faMapMarked = faMapMarked;
  faPhone = faPhone;
  faDatabase = faDatabase;
}
