import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService, Project, NotifyService } from '@mdv-eight/core-data';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'mdv-eight-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  _project;

  public get project() {
    return this._project;
  }

  public set project(value) {
    this._project = value;
  }

  form: FormGroup
  originalTitle;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private projectService: ProjectService,
    private notify: NotifyService
    ) { }

    ngOnInit() {
      this.initForm();
      const projectId = this.route.snapshot.params && this.route.snapshot.params.id;
      this._project = this.projectService.findOne(projectId)
      this._project.pipe(
        tap((project: Project) => this.form.patchValue(project)),
        tap((project: Project) => this.originalTitle = project.title)
        ).subscribe(
          this.notify.notification('Loaded Project')
        );
  }

  initForm() {
    this.form = this.fb.group({
      id: null,
      title: [''],
      details: ['']
    })
  }
}
