import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleName = "This is name of the article"
  @Input() someValue: any;
  @Output() onPress = new EventEmitter();

  firePressed(e: any) {
    this.onPress.emit(e)
  }
  number1 = '1'

  constructor() { }

  ngOnInit(): void {
  }

}
