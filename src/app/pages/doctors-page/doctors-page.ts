import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.interface';
import { DoctorCard } from '../../components/doctor-card/doctor-card';

@Component({
  selector: 'app-doctors-page',  
  standalone: true,  
  imports: [CommonModule, DoctorCard],  
  templateUrl: './doctors-page.html',  
  styleUrls: ['./doctors-page.css']
})
export class DoctorsPageComponent {
  private doctorsService = inject(DoctorsService);  
  
  doctors = toSignal(this.doctorsService.getDoctors(), {
    initialValue: [] as Doctor[]
  });

  // Search term signal
  searchTerm = signal('');

  // Computed filtered doctors based on the search term
  filteredDoctors = computed(() => {
    const list = this.doctors();
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) return list;
    return list.filter((d: Doctor) => {
      const fullName = (d.firstname + ' ' + d.lastname).toLowerCase();
      return (
        fullName.includes(term) ||
        (d.speciality || '').toLowerCase().includes(term) ||
        (d.email || '').toLowerCase().includes(term) ||
        (d.address || '').toLowerCase().includes(term)
      );
    });
  });
}