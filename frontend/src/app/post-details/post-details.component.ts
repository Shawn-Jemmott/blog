import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostDetailService } from './post-details.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostDetailService],
})
export class PostDetailsComponent implements OnInit {

  record: any;
  route_id: any = 0;
  pageType = 'new';

  constructor(public dialogRef: MatDialog, private postDetailService: PostDetailService, private route:ActivatedRoute, private _router: Router,) {

    if(this.route.snapshot.params['id']){
      this.route_id = this.route.snapshot.params['id'];
      this.getRecord(this.route_id);
      this.pageType = 'edit';
    }
    else{
      this.pageType = 'new';
    }
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  closeDialog(){
    this.dialogRef.closeAll();
  }

  getRecord(id: number){
    this.postDetailService.getRecord(id).subscribe((res: any)=>{
      this.record = res;
    })
  }

  saveRecord(title: string, body: string){
    this.postDetailService.saveRecord(parseInt(this.route_id), {id: parseInt(this.route_id), title, body}).subscribe((res)=>{
      console.log('saved record')
      console.log(res);
    });
  }
  

  deleteRecord(){
    this.postDetailService.removeRecord(parseInt(this.route_id)).subscribe((res)=>{
      console.log('delete record')
      this._router.navigate(['']);

    });
  }

  addRecord(title: string, body: string){

    this.postDetailService.addRecord({title, body}).subscribe((res: any)=>{
      this.dialogRef.closeAll();
      this._router.navigate(['/postdetail/' + res.id]);
    });
  }
}


