import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../modal.service';
import { MatDialog } from '@angular/material/dialog';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostListService } from './post-listview.service';

@Component({
  selector: 'app-post-listview',
  templateUrl: './post-listview.component.html',
  styleUrls: ['./post-listview.component.css'],
  providers: [PostListService],
})
export class PostListviewComponent implements OnInit {
  records: any;

  constructor(private dialogRef: MatDialog, private postListService: PostListService) {
    this.postListService.getRecord().subscribe((res: any)=>{
      this.records = res;
    })
  }

  openDialog(){
    this.dialogRef.open(PostDetailsComponent);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}