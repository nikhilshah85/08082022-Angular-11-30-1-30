import { Component, OnInit } from '@angular/core';
import { RestcallsService } from '../services/restcalls.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.css']
})
export class PostdataComponent implements OnInit {


  _restService:RestcallsService;

  constructor(_restServiceREF:RestcallsService) 
  {
    this._restService = _restServiceREF;
   }

  ngOnInit(): void {
  }

}
