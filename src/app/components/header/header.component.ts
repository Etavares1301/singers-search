import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListHistory } from 'src/app/core/model/list-history';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public taskList: Array<ListHistory> = JSON.parse(localStorage.getItem("list") || '[]');

  public form = new FormGroup({
    teste: new FormControl(null)
  })

  public setEmitTaskList(event: any){
    console.log(this.taskList)
  }


  addItemListHistory: string = '';
  @Output() public emitItemListHistory = new EventEmitter();

  submitItemListHistory(valueInput:string) {
    
    this.addItemListHistory = valueInput.trim();
console.log(this.addItemListHistory)

    if (this.addItemListHistory) {
      this.emitItemListHistory.emit(this.addItemListHistory);
      this.addItemListHistory = '';
    }
  }


}
