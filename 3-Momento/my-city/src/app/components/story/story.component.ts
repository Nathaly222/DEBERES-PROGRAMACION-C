import { Component, AfterViewInit, AfterContentInit, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule],
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent  {
  
}
