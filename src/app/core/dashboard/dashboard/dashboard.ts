import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    TagModule,
    ProgressBarModule,
    ChartModule,
    TableModule,
    TimelineModule,
    ButtonModule
  ],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  /* ================= ORIGINAL DATA ================= */

  analytics = [
    { title: 'Users', value: '1,248', icon: 'pi-users', color: 'text-primary' },
    { title: 'Revenue', value: '$34,900', icon: 'pi-dollar', color: 'text-green-500' },
    { title: 'Tasks', value: '312', icon: 'pi-check-square', color: 'text-orange-500' },
    { title: 'Growth', value: '+18%', icon: 'pi-chart-line', color: 'text-blue-500' }
  ];

  lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ label: 'Revenue', data: [4000, 5200, 6100, 7000, 8200, 9000], tension: 0.4 }]
  };

  doughnutData = {
    labels: ['Completed', 'In Progress', 'Pending'],
    datasets: [{ data: [60, 25, 15] }]
  };

  todo = [
    { title: 'Landing Page', tag: 'UI' },
    { title: 'Login Flow', tag: 'Auth' }
  ];
  progress = [{ title: 'Dashboard Layout' }];
  testing = [{ title: 'API Integration' }];
  done = [{ title: 'Project Setup' }];

  users = [
    { name: 'Radhe Shyam', role: 'Admin', status: 'Active' },
    { name: 'John Smith', role: 'User', status: 'Active' },
    { name: 'Anita Sharma', role: 'Manager', status: 'Inactive' }
  ];

  activities = [
    { status: 'Task Created', date: '10:00 AM' },
    { status: 'User Registered', date: '11:30 AM' },
    { status: 'Payment Received', date: '02:00 PM' }
  ];

  /* ================= ENTERPRISE ADDITIONS ================= */

  kpiStats = [
    { title: 'Active Projects', value: 24, icon: 'pi-briefcase', trend: '+4%', trendColor: 'text-green-500' },
    { title: 'Pending Approvals', value: 12, icon: 'pi-clock', trend: '-2%', trendColor: 'text-red-500' },
    { title: 'New Clients', value: 18, icon: 'pi-users', trend: '+6%', trendColor: 'text-green-500' },
    { title: 'Open Tickets', value: 9, icon: 'pi-ticket', trend: '+1%', trendColor: 'text-orange-500' }
  ];

  barData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{ label: 'Sales', data: [12000, 15000, 18000, 22000] }]
  };

  pieData = {
    labels: ['HR', 'IT', 'Sales', 'Marketing'],
    datasets: [{ data: [10, 25, 40, 25] }]
  };

  radarData = {
    labels: ['Design', 'Development', 'Testing', 'Deployment', 'Support'],
    datasets: [{ label: 'Team Performance', data: [80, 90, 70, 85, 75] }]
  };

  projects = [
    { name: 'Enterprise Portal', manager: 'Radhe', status: 'Active', budget: '$12,000' },
    { name: 'Mobile App', manager: 'John', status: 'In Progress', budget: '$8,500' },
    { name: 'CRM Upgrade', manager: 'Anita', status: 'Completed', budget: '$15,200' }
  ];

  milestones = [
    { status: 'Project Initiated', date: '01 Jan' },
    { status: 'Design Completed', date: '15 Jan' },
    { status: 'Development Started', date: '01 Feb' },
    { status: 'Testing Phase', date: '15 Feb' }
  ];
}