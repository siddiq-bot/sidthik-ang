import { Component, Directive, forwardRef, 
  Attribute,OnChanges, SimpleChanges,Input  } from '@angular/core';
  import { NG_VALIDATORS,Validator,
    Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import { User }    from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
 powers = ['Really Smart', 'Super Flexible',
              'Super Hot', 'Weather Changer'];
    model = new User('','',null,'','','');
    submitted = false;
    onSubmit() { this.submitted = true; }
    newHero() 
}
