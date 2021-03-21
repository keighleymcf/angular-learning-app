import { Component, OnInit, TestabilityRegistry } from '@angular/core';

@Component({
  selector: 'app-servers', // for components convention is to select by component. other optionsselect by attribute "[]", event (), select by class ".class"
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false
  serverCreationStatus: string = "create new server"
  serverName = "test"
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = "server was created"
    this.serverCreated = true
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

  ngOnInit(): void {
  }

}
