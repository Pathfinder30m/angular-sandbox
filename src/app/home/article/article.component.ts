import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articleName = "This is name of the article"
  @Input() someValue: any;
  number1 = '1'
  pressed() {
    document.createElement('p').innerHTML = this.number1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
