import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalendarOptions, DateSelectArg, EventInput } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import tippy from 'tippy.js';

@Component({
  selector: 'app-full-calender',
  imports: [FullCalendarModule, DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './full-calender.html',
  styleUrl: './full-calender.scss',
})
export class FullCalender {
  // events: any[] = [];

  // calendarOptions: CalendarOptions = {
  //   plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  //   initialView: 'dayGridMonth',
  //   selectable: true,
  //   headerToolbar: {
  //     left: 'prev,next today',
  //     center: 'title',
  //     right: 'dayGridMonth,timeGridWeek,timeGridDay'
  //   },

  //   select: (arg: DateSelectArg) => {
  //     this.selectedDate = arg.start;
  //     this.showDialog = true;
  //   },

  //   events: this.events
  // };

showDialog = false;
  selectedDate!: Date;

  // Reactive Form
  eventForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    color: new FormControl('#3b82f6')
  });

  // Hard-coded Events (same day multiple + color)
  events: EventInput[] = [
    {
      title: 'Team Meeting',
      start: '2026-02-18',
      color: '#3b82f6',
      extendedProps: { description: 'Discuss sprint tasks' }
    },
    {
      title: 'Client Call',
      start: '2026-02-18',
      color: '#22c55e',
      extendedProps: { description: 'Call with US client' }
    },
    {
      title: 'Code Review',
      start: '2026-02-18',
      color: '#f59e0b',
      extendedProps: { description: 'Review PR #245' }
    },
    {
      title: 'Deployment',
      start: '2026-02-18',
      color: '#ef4444',
      extendedProps: { description: 'Production deploy' }
    },
    {
      title: 'Design Meeting',
      start: '2026-02-18',
      color: '#8b5cf6',
      extendedProps: { description: 'UI/UX discussion' }
    }
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    dayMaxEvents: true,   // +N more

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },

    events: this.events,

    // Date click → open dialog
    select: (arg: DateSelectArg) => {
      this.selectedDate = arg.start;
      this.showDialog = true;
    },

    // Tooltip on hover
    eventDidMount: (info) => {
      const desc = info.event.extendedProps['description'] || '';
      tippy(info.el, {
        content: `<b>${info.event.title}</b><br>${desc}`,
        allowHTML: true,
        placement: 'top',
        theme: 'light-border'
      });
    }
  };

  // Add new event dynamically
  saveEvent() {
    const val = this.eventForm.value;

    const newEvent: EventInput = {
      title: val.title!,
      start: this.selectedDate,
      color: val.color!,
      extendedProps: {
        description: val.description || ''
      }
    };

    this.events.push(newEvent);

    // refresh calendar
    this.calendarOptions = {
      ...this.calendarOptions,
      events: [...this.events]
    };

    this.eventForm.reset({ color: '#3b82f6' });
    this.showDialog = false;
  }
}
