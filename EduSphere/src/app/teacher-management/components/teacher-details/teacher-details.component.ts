import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherManagementService } from '../../services/teacher-management.service';

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.scss'
})
export class TeacherDetailsComponent implements OnInit {
  
  teacherId: string | null = null; // Allow null as a valid type
  teacherDetails: any [] = []
  constructor(private route: ActivatedRoute, private teacherManagementService: TeacherManagementService) {}

  ngOnInit(): void {
    // this.loadTeachers();
    this.teacherId = this.route.snapshot.paramMap.get('id'); // Can be null
    // Handle null value appropriately in the component
  }


  // loadTeachers(): void {
  //   this.teacherManagementService.getAllTeachers().subscribe(
  //     (data) => {
  //       this.teacherDetails = data; // Store the data in the teachers array
  //       console.log("Teacher details", this.teacherDetails)
  //     },
  //     (error) => {
  //       console.error('Error fetching teacher data:', error); // Error handling
  //     }
  //   );
  // }
}
