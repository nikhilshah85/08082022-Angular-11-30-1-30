import { Component, OnInit } from '@angular/core';
import { RestcallsService } from 'src/app/services/restcalls.service';

@Component({
  selector: 'app-photosdata',
  templateUrl: './photosdata.component.html',
  styleUrls: ['./photosdata.component.css']
})
export class PhotosdataComponent implements OnInit {


      _restService:RestcallsService;
  constructor(_restServiceREF:RestcallsService) {
    this._restService = _restServiceREF;
   }

  ngOnInit(): void {
  }

}
