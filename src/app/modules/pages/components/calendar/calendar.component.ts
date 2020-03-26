import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  selectedValue = Date.now();
  testData = {
    date: new Date(Date.parse('2020-03-31T14:31:20.672Z')),
    data: {
      startTime: new Date(Date.parse('2020-03-31T09:00:00.00Z')),
      endTime: new Date(Date.parse('2020-03-31T20:00:00.000Z')),
      content: 'CONTENT'
    }
  };
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
    // console.log(this.listDataMap);
    // console.log(this.testData);
  }

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

}
