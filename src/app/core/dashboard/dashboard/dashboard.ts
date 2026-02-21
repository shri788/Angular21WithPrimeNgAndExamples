import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CardModule, AvatarModule, TagModule, ProgressBarModule, ChartModule, TableModule, TimelineModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  
  /* ANALYTICS */
  analytics = [
    { title: 'Users', value: '1,248', icon: 'pi-users', color: 'text-primary' },
    { title: 'Revenue', value: '$34,900', icon: 'pi-dollar', color: 'text-green-500' },
    { title: 'Tasks', value: '312', icon: 'pi-check-square', color: 'text-orange-500' },
    { title: 'Growth', value: '+18%', icon: 'pi-chart-line', color: 'text-blue-500' }
  ];

  /* CHART DATA */
  lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 5200, 6100, 7000, 8200, 9000],
        fill: false,
        tension: 0.4
      }
    ]
  };

  doughnutData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [
      {
        data: [60, 25, 15]
      }
    ]
  };

  /* KANBAN */
  todo = [
    { title: 'Landing Page', tag: 'UI' },
    { title: 'Login Flow', tag: 'Auth' }
  ];

  progress = [
    { title: 'Dashboard Layout' }
  ];

  testing = [
    { title: 'API Integration' }
  ];

  done = [
    { title: 'Project Setup' }
  ];

  /* TABLE */
  users = [
    { name: 'Radhe Shyam', role: 'Admin', status: 'Active' },
    { name: 'John Smith', role: 'User', status: 'Active' },
    { name: 'Anita Sharma', role: 'Manager', status: 'Inactive' }
  ];

  /* TIMELINE */
  activities = [
    { status: 'Task Created', date: '10:00 AM' },
    { status: 'User Registered', date: '11:30 AM' },
    { status: 'Payment Received', date: '02:00 PM' }
  ];
}
