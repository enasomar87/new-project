import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-iimage-model',
  templateUrl: './iimage-model.component.html',
  styleUrls: ['./iimage-model.component.css']
})
export class IimageModelComponent {
  @Input() showModal: boolean = false;
  @Input() imageUrl: string = '';

  closeModal(): void {
    this.showModal = false;
  }

}
