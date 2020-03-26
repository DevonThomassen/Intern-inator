import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  date = null;
  dateFormat = 'dd-mm-yyyy';
  inputValue: string;
  disabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
