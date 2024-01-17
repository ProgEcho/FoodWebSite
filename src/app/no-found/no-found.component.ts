import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html',
  styleUrls: ['./no-found.component.css']
})
export class NoFoundComponent implements OnInit {
  @Input()
  visible:boolean = false;
  @Input()
  notFoundMessage: string = "Nothing Found";
  @Input()
  restLinkText: string = "Reset";
  @Input()
  restLinkRouter: string= "/"
  constructor() { }

  ngOnInit(): void {
  }

}
