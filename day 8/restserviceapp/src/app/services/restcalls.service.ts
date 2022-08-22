import { AnimationStyleMetadata } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestcallsService {

    private _http:HttpClient;
    postDetails:any;
    photosDetails:any;


  constructor(private _httpRef:HttpClient){
    this._http = _httpRef;
   }


   getPostData()
   {
       this.postDetails = this._http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data =>{
        this.postDetails = data;
       });
       console.log(this.postDetails);       
   }

   getPhotoDetails()
   {
    this.photosDetails = this._http.get('https://jsonplaceholder.typicode.com/photos').subscribe(photos =>{
      this.photosDetails = photos;
    })
   }
}
