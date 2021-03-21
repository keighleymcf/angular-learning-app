import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // for components convention is to select by component. other optionsselect by attribute "[]", select by class ".class"
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

}
