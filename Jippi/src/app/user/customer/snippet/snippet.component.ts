import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css'],
})
export class SnippetComponent implements OnInit {
  // CREATE UNIQUE KEY FOR EACH SNIPPET.
  key: number = Date.now();
  date: any = new Date();
  data: any = [];
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    console.log(history.state.data);
    console.log(history.state.data[0].total);
    this.total = history.state.data[0].total;
    this.data = history.state.data;
  }

  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    console.log('SnippetComponent -> captureScreen -> data', data);
    html2canvas(data).then((canvas) => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`${this.key}.pdf`); // Generated PDF
    });
  }
}
