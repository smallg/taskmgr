import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../domain';

@Injectable()
export class ProjectService {

    private readonly domain = 'projects';
    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private  http: HttpClient, @Inject('API_URL') private apiUrl) {
    }

    add(project: Project): Observable<Project> {
        project.id = null;
        const uri = `${this.apiUrl}/${this.domain}`;
        return this.http.post(uri, JSON.stringify(project), {headers: this.headers})
            .mapTo(project);
    }

    update(project: Project): Observable<Project> {
        const uri = `${this.apiUrl}/${this.domain}/${project.id}`;
        const toUpdate = {
            name: project.name,
            desc: project.desc,
            coverImg: project.coverImg
        };
        return this.http.patch(uri, JSON.stringify(toUpdate), {headers: this.headers})
            .mapTo(project);
    }

    del(project: Project): Observable<Project> {
        const delTask$ = Observable.from(project.taskLists)
            .mergeMap(listId => this.http.delete(`${this.apiUrl}/taskLists/${listId}`))
            .count();
        return delTask$.switchMap(_ => this.http.delete(`${this.apiUrl}/${this.domain}/${project.id}`))
            .mapTo(project);
    }

    get(userId: string): Observable<Project[]> {
        const uri = `${this.apiUrl}/${this.domain}`;
        return this.http.get(uri, {params: {'members_like': userId}})
            .map(res => res as Project[]);
    }
}
