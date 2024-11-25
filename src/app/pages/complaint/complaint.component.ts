import { Component } from '@angular/core';
import { ArticleComponent } from "../../components/article/article.component";

@Component({
  selector: 'app-complaint',
  standalone: true,
  imports: [
    ComplaintComponent
],
  templateUrl: './complaint.component.html',
  styleUrl: './complaint.component.scss'
})
export class ComplaintComponent {

}
