import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  comments: { [key: string]: string } = {
    'Nickname1':'Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    'Nickname2':'Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    'Nickname3':'Lorem ipsum dolor sit amet, consectetur adipiscing elit,    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
  }

  new_comment: string = 'Nuevo comentario'

  flag_comments = false;

  showComments() {
    this.flag_comments = true;
  }

  hideComments() {
    this.flag_comments = false;
  }
}
