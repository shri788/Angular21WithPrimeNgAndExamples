import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SpeedDialModule } from 'primeng/speeddial';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-buttons',
  imports: [ButtonModule, SplitButtonModule, ToggleButtonModule, SpeedDialModule, FormsModule],
  templateUrl: './all-buttons.html',
  styleUrl: './all-buttons.scss',
})
export class AllButtons {
  checked = false;
  items = [
    { label: 'Save as Draft', icon: 'pi pi-file' },
    { label: 'Publish', icon: 'pi pi-upload' }
  ];

  speedItems = [
    { label: 'Add', icon: 'pi pi-plus' },
    { label: 'Edit', icon: 'pi pi-pencil' },
    { label: 'Delete', icon: 'pi pi-trash' }
  ];
}
