import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../modules/cadastros/owner/models/owner';
import { Api } from './api';

@Injectable()
export class OwnerService  extends Api<Owner> {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'owner');
  }
}
