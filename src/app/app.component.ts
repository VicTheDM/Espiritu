import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'EspirituSanto';
  selector:number = 0
  selectPage(page:string){
    
  }
  
  constructor(
    private router : Router, 
    public route: ActivatedRoute,
    private titleService: Title,
  ) { }

}
