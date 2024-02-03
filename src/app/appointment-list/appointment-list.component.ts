import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = [];

  //add new appointment
  addAppointment() {
    if (this.newAppointmentDate && this.newAppointmentTitle.trim().length) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);

      //clear the input
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
    }
  }

  //delete a new appointment
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
