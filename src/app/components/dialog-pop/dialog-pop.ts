import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-pop',
  imports: [DialogModule, ButtonModule, FormsModule],
  templateUrl: './dialog-pop.html',
  styleUrl: './dialog-pop.scss',
})
export class DialogPop {
  visible = false;

  
  user = {
    name: '',
    email: ''
  };

  showDialog() {
    this.visible = true;
  }

  save() {
    console.log(this.user);
    this.visible = false;
  }
}
