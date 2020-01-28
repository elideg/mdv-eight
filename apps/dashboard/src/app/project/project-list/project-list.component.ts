import { Project, NotifyService } from '@mdv-eight/core-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mdv-eight-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {


  @Input() projects: Project[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor(
    private notify: NotifyService
  ) { }

  ngOnInit() {
  }

  select(project: Project) {
    this.notify.notification('Selected Project')
    this.selected.emit(project);
  }

  delete(project: Project) {
    this.deleted.emit(project);
  }
}
