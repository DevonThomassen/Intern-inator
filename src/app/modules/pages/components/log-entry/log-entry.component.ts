import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  dateFormat = 'dd-MM-yyyy';
  // TODO: Make default date match with logForm.date
  defaultValues = {
    startTime: new Date(0, 0, 0, 9, 0, 0),
    endTime: new Date(0, 0, 0, 17, 0, 0)
  };
  disabled = true;
  outputString: string;

  logForm = new FormGroup({
    date: new FormControl(null),
    data: new FormGroup({
      startTime: new FormControl(null),
      endTime: new FormControl(null),
      content: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.setDate();
    this.outputString = JSON.stringify(this.logForm.value, null, 2);
  }

  // TODO: Remove ugly code by making default date match with logForm.date
  setDate() {
    this.logForm.value.data.startTime.setDate(this.logForm.value.date.getDate());
    this.logForm.value.data.endTime.setDate(this.logForm.value.date.getDate());
    this.logForm.value.data.startTime.setMonth(this.logForm.value.date.getMonth());
    this.logForm.value.data.endTime.setMonth(this.logForm.value.date.getMonth());
    this.logForm.value.data.startTime.setFullYear(this.logForm.value.date.getFullYear());
    this.logForm.value.data.endTime.setFullYear(this.logForm.value.date.getFullYear());
  }

}
