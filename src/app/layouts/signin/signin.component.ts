import  SigninFormComponent from './../../components/signin-form/signin-form.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, SigninFormComponent, RouterOutlet],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export default class SigninComponent {

}
