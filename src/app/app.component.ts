import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appAdd';

  newArr = [];
  serverName:'';
  contetn:''


  addServer(){
   this.newArr.push({
     type:'server',
     name:this.serverName,
     text:this.contetn
   })
   this.serverName='';
   this.contetn=''
  }
  addServerDanger(){
    this.newArr.push({
      type:'serverRed',
      name:this.serverName,
      text:this.contetn
    })
    this.serverName='';
    this.contetn=''
  }

}
