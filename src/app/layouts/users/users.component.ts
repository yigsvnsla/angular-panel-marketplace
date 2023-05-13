import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { UserRoutes } from './../../routers/user.routes';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from "@angular/material/menu";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    RouterModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgOptimizedImage
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export default class UsersComponent {

  public routes = UserRoutes.children;

}
