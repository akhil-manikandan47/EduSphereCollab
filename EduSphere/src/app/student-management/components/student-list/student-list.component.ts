import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { PrimengModule } from 'src/app/primeng.module';
import { StudentManagementService } from '../../services/student-management.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Student {
  name: string;
  class: string;
  age: number;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule, PrimengModule, MaterialModule, RouterModule],
  templateUrl:'./student-list.component.html',
  styleUrl:'./student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'name', 'class', 'age', 'actions'];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();  // Initialize dataSource
  searchQuery: string = ''; // To bind with the search input field
  pageSize: number = 10; // Default page size
  paginatedStudents: Student[] = []; // To hold paginated students
  filteredStudents: Student[] = []; // To hold filtered students
  teacherDetails: any [] = []

  students: Student[] = [
    {name: 'John Doe', class: '10', age: 15},
    {name: 'Jane Smith', class: '9', age: 14},
    {name: 'Michael Brown', class: '10', age: 16},
    // Add more students here...
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private studentService: StudentManagementService){}

  ngOnInit() {
    // this.loadTeachers();
    this.dataSource = new MatTableDataSource(this.students);
    this.filteredStudents = this.students; // Initialize filtered students with all students
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Filter students based on the search query
  filterStudents() {
    this.filteredStudents = this.students.filter(student => 
      student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      student.class.includes(this.searchQuery)
    );
    this.applyPagination();
  }

  // Apply pagination to filtered students
  applyPagination() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    this.paginatedStudents = this.filteredStudents.slice(startIndex, endIndex);
  }

  // Handle page change event
  onPageChange(event: any) {
    this.paginator.pageIndex = event.pageIndex;
    this.paginator.pageSize = event.pageSize;
    this.applyPagination();
  }

  // loadTeachers(): void {
  //   this.studentService.getTeachers().subscribe(
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