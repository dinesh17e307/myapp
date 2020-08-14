import { Component, OnInit ,ViewChild,Inject} from '@angular/core';
import { Params,ActivatedRoute}from '@angular/router';
import{Location} from '@angular/common';
import {Sch} from '../share/sch';
import {DishServicesService} from '../services/dish-services.service';
import {switchMap} from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{Comment} from '../share/comment';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish:Sch;
    dishcopy:Sch;
    dishid:string[];
    prev:string;
    next:string;
    commentuser:Comment;
    dishform:FormGroup;
    formErrors = {
      'author': '',
      'comment': ''
    };
    validationMessages = {
      'author': {
        'required':      'First Name is required.',
        'minlength':     'First Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
      },
      'comment': {
        'required':      'comments is required.',
        'minlength':     'comment must be at least 2 characters long.',
        'maxlength':     'comment cannot be more than 250 characters long.'
      }
    };
    @ViewChild('fdform') dishformDirective;
  constructor(private dishservice:DishServicesService,private route:ActivatedRoute
    ,private location:Location ,private fb:FormBuilder,@Inject('BaseURL') private BaseURL ) { 
      this.createForm();

    }

    ngOnInit() {
      this.dishservice.getdishid().subscribe(dishid=>this.dishid=dishid);
      this.route.params.pipe(switchMap((params:Params)=>this.dishservice.getDish(params['id'])))
      .subscribe(dish=>{this.dish =dish;this.setprevnext(dish.id)});
    }
    setprevnext(dishid : string){
     const index=this.dishid.indexOf(dishid);
     this.prev=this.dishid[(this.dishid.length + index - 1) % this.dishid.length];
     this.next=this.dishid[(this.dishid.length + index + 1) % this.dishid.length];
    }
    createForm() {
      this.dishform = this.fb.group({
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        rating:'',
        comment: ['', [Validators.required,Validators.minLength(2),  Validators.maxLength(250)] ],
      });
    this.dishform.valueChanges
    .subscribe(data => this.onValueChanged(data));

     this.onValueChanged();
  }
  onValueChanged(data?:any){
    if (!this.dishform) { return; }
    const form = this.dishform;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
      
    }
   
  }

    goBack(): void {
      this.location.back();
    }

    onSubmit(){
      this.commentuser=this.dishform.value;
      console.log(this.commentuser);
      this.commentuser.date= new Date().toISOString();
      this.dish.comments.push(this.commentuser)
    this.dishform.reset({
      author: '',
      rating:'',
      authorcom: ''
    });
    this.dishformDirective.resetForm();
    }
}
