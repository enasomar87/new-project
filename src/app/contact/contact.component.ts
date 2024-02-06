import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  showLabel: boolean = false; // Initially, the label is not shown
  placeholderText: string = "Your placeholder here"; // Initial placeholder text

  onKeyUp(event: KeyboardEvent): void {
    this.showLabel = true; // Show the label when keyup event occurs
    this.placeholderText = ''}; // Remove the placeholder text
}
