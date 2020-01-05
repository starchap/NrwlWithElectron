import { Component, OnInit } from '@angular/core';
import { ipcRenderer } from 'electron';

type Terminal = {
  Error: Error, 
  stdOut: string |Buffer, 
  stdErr: string |Buffer
}

@Component({
  selector: 'myworkspace-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  constructor() {
    console.log('init')
    ipcRenderer.on('execRes', (event: Electron.IpcMessageEvent, arg: Terminal) => {
      console.log(arg.stdOut);
    });

    ipcRenderer.send('exec', 'ipconfig');
  }

  ngOnInit() {
  }
}
