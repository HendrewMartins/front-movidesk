import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryOwner } from '../modules/cadastros/categoryowner/models/categoryowner';
import { Api } from './api';

@Injectable()
export class CategoryOwnerService  extends Api<CategoryOwner> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'controllercategory');
  }
}
