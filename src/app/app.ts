import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TopbarMenu } from './components/topbar-menu/topbar-menu';
// import { AutocompleteField } from './components/autocomplete-field/autocomplete-field';
// import { DateFields } from './components/date-fields/date-fields';
// import { FullCalender } from './components/full-calender/full-calender';
// import { SelectFields } from './components/select-fields/select-fields';
// import { Steppers } from './components/steppers/steppers';
// import { InputField } from './components/input-field/input-field';
// import { Tabs } from './components/tabs/tabs';
// import { TimePickers } from './components/time-pickers/time-pickers';
// import { Tooltips } from './components/tooltips/tooltips';
// import { TreeStructure } from './components/tree-structure/tree-structure';
// import { HeadersWithMenu } from './components/headers-with-menu/headers-with-menu';
// import { Snackbars } from './components/snackbars/snackbars';
// import { Badges } from './components/badges/badges';
// import { Checkboxes } from './components/checkboxes/checkboxes';
// import { Spinners } from './components/spinners/spinners';
// import { Gallery } from './components/gallery/gallery';
// import { DialogPop } from './components/dialog-pop/dialog-pop';
// import { AllFormsInputs } from './components/all-forms-inputs/all-forms-inputs';
// import { AllButtons } from './components/all-buttons/all-buttons';
// import { DataTable } from './components/data-table/data-table';
// import { Card } from './components/card/card';
;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('oneApp');
}
