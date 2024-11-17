import { Component } from '@angular/core';

@Component({
  selector: 'app-poppup',
  standalone: true,
  imports: [],
  templateUrl: './poppup.component.html',
  styleUrl: './poppup.component.css',
})
export class PoppupComponent {
  myFunction() {
    const popup = document.getElementById('myPopup');
    if (popup) {
      popup.classList.toggle('show');
    }
  }
}
