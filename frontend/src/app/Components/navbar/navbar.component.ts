import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from 'src/app/post-details/post-details.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

export class NavbarComponent{
  constructor(public dialogRef: MatDialog) {
  }

  openDialog(){
    this.dialogRef.open(PostDetailsComponent,{
      height: '50%',
      width: '60%'
  });
  }
}
