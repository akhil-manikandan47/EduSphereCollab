import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableService } from 'src/app/utils/table.service';
import { AlertService } from 'src/app/utils/alert.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from 'src/app/dialog-box/dialog-box.component';
import { PrimengModule } from 'src/app/primeng.module';
import { Router } from '@angular/router';
import { TeacherManagementService } from '../../services/teacher-management.service';

export interface Teachers {
  teacherName: string;
  employeeId: number;
  gender: string;
  clubName: string;
  departmentName: string;
  address: string;
  mobile: string;
  email: string;
  dateOfBirth: Date;
  categoryName: string;
  departmentId?: number;  // Make departmentId optional
  department?: {
    departmentId?: number;
    departmentName: string;
  };
  club?: {
    clubId?: number;
    clubName: string;
  };
  subject?: {
    subjectId?: number;
    subjectName: string;
  };
}
export interface DisplayColumn {
  def: string;
  label: string;
  hide: boolean;
}

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [MaterialModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, PrimengModule],
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
  providers: [TeacherManagementService],
  animations: [
    trigger('animation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(100%)', opacity: 0 }),
            animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 }))
          ],
          {
            optional: true
          }
        )
      ])
    ])
  ]
})
export class TeacherListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  ELEMENT_DATA!: Teachers[];
  dataSource = new MatTableDataSource<Teachers>(this.ELEMENT_DATA);
  selection!: SelectionModel<Teachers>;
  countries: Teachers[] = [];
  selectedTeacher: string = 'all';
  add: string = 'Add';
  edit: string = 'Edit';
  delete: string = 'Delete';
  value: string = '';
  isLoading: boolean = true;
  teacherInfo: any []= []

  // Keep as main 'column mapper'
  displayedColumns: DisplayColumn[] = [ 
    { def: 'select', label: 'Select', hide: false },
    { def: 'employeeId', label: 'Employee Id', hide: false },
    { def: 'teacherName', label: 'Teacher Name', hide: false },
    { def: 'subjectName', label: 'Subject', hide: false },
    { def: 'departmentName', label: 'Department Name', hide: false },
    { def: 'clubName', label: 'Club', hide: false },
    { def: 'email', label: 'Email', hide: false },
    { def: 'gender', label: 'Gender', hide: false },
    { def: 'mobile', label: 'Phone', hide: false },
    { def: 'address', label: 'Address', hide: false },
    { def: 'action', label: 'Action', hide: false },

  ];

   // Method to handle row click
   onRowClicked(row: any): void {
    const teacherId = row.id;  // Ensure 'id' exists in the row object
    this.router.navigate(['/teacher-details', teacherId]);
  }

  // Used in the template
  disColumns!: string[]; 

  // Use for creating check box views dynamically in the template
  checkBoxList: DisplayColumn[] = [];

  constructor(
    public dialog: MatDialog,
    private service: TableService,
    private alertService: AlertService,
    private router: Router,
    private teacherService: TeacherManagementService
  ) { }

  ngOnInit(): void {
this.getTeacherInfo()
    
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;

    this.selection = new SelectionModel<Teachers>(true, []);

    this.disColumns = this.displayedColumns.map(cd => cd.def)

    this.getTeacherInfo();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
  // openAddEditDialog(action: string, obj: any): void {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     data: obj,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result != null) {
  //       const action = result.data['action'];
  //       delete result.data['action'];
  //       if (action == this.add) {
  //         this.addRowData(result.data);
  //       } else if (action == this.edit) {
  //         this.updateRowData(result.data);
  //       } else {
  //         console.log(action);
  //       }
  //     }
  //   });
  // }

  openAddpage(){
    this.router.navigate(['/teacher-management/teacher-details'])
  }

  addRowData(row_obj: any): void {
    const data = this.dataSource.data
    data.push(row_obj);
    this.dataSource.data = data;
  }
  updateRowData(row_obj: any): void {
    if (row_obj === null) { return; }
    const data = this.dataSource.data
    const index = data.findIndex((item) => item.employeeId === row_obj.employeeId);
    if (index > -1) {
      data[index].employeeId = row_obj.data['employeeId'];
      data[index].teacherName = row_obj.data['teacherName'];
      data[index].gender = row_obj.data['gender'];
      data[index].email = row_obj.data['email'];
      data[index].mobile = row_obj.data['mobile'];
      data[index].address = row_obj.data['address'];
      data[index].club = {
        ...data[index].club,
        clubName: row_obj.data['clubName']
      };
      data[index].subject = {
        ...data[index].subject,
        subjectName: row_obj.data['subjectName']
      };
      data[index].department = {
        ...data[index].department,
        departmentName: row_obj.data['departmentName']
      };
    }
    this.dataSource.data = data;
  }
  openDeleteDialog(len: number, obj: any): void {
    const options = {
      title: 'Delete?',
      message: `Are you sure want to remove ${len} rows?`,
      cancelText: 'NO',
      confirmText: 'YES'
    };
    this.alertService.open(options);
    this.alertService.confirmed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteRow(obj);
      }
    });
  }
  deleteRow(row_obj: any): void {
    const data = this.dataSource.data
    const index = data.findIndex((item) => item['teacherName'] === row_obj['teacherName']);
    if (index > -1) {
      data.splice(index, 1);
    }
    this.dataSource.data = data;
  }
  public getTeacherInfo(): void {
    let resp = this.teacherService.getAllTeachers();
    resp.subscribe((report) => {
      this.isLoading = false;
      this.dataSource.data = report as Teachers[];
      console.log(this.dataSource.data)
    })
  }
  // public onSelectCountry(): void {
  //   this.selection.clear();
    
  //   if (this.selectedCountry === 'all') {
  //     this.getTeacherInfo();
  //   } else {
  //     this.teacherService.getAllTeachers(this.selectedTeacher)
  //       .subscribe((report) => {
  //         this.dataSource.data = [report] as Teachers[];
  //       }, (error) => {
  //         console.error('Error fetching report by country:', error);
  //       });
  //   }
  // }
  showCheckBoxes(): void {
    this.checkBoxList = this.displayedColumns;
  }

  hideCheckBoxes(): void {
    this.checkBoxList = [];
  }

  toggleForm(): void {
    this.checkBoxList.length ? this.hideCheckBoxes() : this.showCheckBoxes();
  }
  hideColumn(event: any, item: string) {
    this.displayedColumns.forEach(element => {
      if (element['def'] == item) {
        element['hide'] = event.checked;
      }
    });
    this.disColumns = this.displayedColumns.filter(cd => !cd.hide).map(cd => cd.def)
  }

  // getTeacherInfo() {
  //   this.teacherService.getAllTeachers().subscribe((data) => {
  //     this.teacherInfo = data;
  //     console.log("hai to me", this.teacherInfo)
  //   }, (error) => {
  //     console.log("failed to fetch teacher details", error)
  //   })
  // }
}