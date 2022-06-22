import { CategoryService } from './../../services/category.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categoryList: ICategory[] = [];

  @Output() CategorySelect: EventEmitter<string>;

  CategorySelected(categoryName: string) {
    this.CategorySelect.emit(categoryName);
  }

  constructor(private _categoryService: CategoryService) {
    this.categoryList = this._categoryService.getAllCategroy();
    this.CategorySelect = new EventEmitter<string>();
  }

  ngOnInit(): void {}
}
