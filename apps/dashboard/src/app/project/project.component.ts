import { Component, OnInit } from '@angular/core';
import { Project, ProjectService, NotifyService } from '@mdv-eight/core-data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-eight-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  form: FormGroup;
  selectedProject: Project;
  projects$;

  constructor(
    private projectService: ProjectService,
    private fb: FormBuilder,
    private notify: NotifyService
    ) { }

  ngOnInit() {
    this.initForm();
    this.resetProject();
    this.getProjects();
  }

  selectProject(project: Project) {
    this.form.patchValue(project);
    this.selectedProject = project;
  }

  getProjects() {
    this.projects$ = this.projectService.all();
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: ''
    }
    this.selectProject(emptyProject);
  }

  createProject(project: Project) {
    this.projectService.create(project).subscribe((r) => {
      this.notify.notification('Created a Project')
      this.resetProject();
      this.getProjects();
    })
  }

  cancel() {
    this.resetProject();
    this.form.reset();
  }

  saveProject(project: Project) {
    if (project.id) {
      this.updateProject(project);
    } else {
      this.createProject(project);
    }
  }

  updateProject(project: Project) {
    this.projectService.update(project).subscribe((r) => {
      this.notify.notification('Updated a Project')
      this.resetProject();
      this.getProjects();
    });
  }

  deleteProject(project: Project) {
    this.projectService.delete(project).subscribe((r) => {
      this.notify.notification('Deleted a Project')
      this.resetProject();
      this.getProjects();
    })
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: [''],
      details: ['']
    })
  }

}
