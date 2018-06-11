import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
 
import { User } from './register/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })
export class UserService {
 
  private usersURL = 'api/registerUser';  // URL to web api
 
  constructor(
    private http: HttpClient,
    private messageService: MessageService  
  ) { }
 
  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersURL)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }
 
  /** GET User by id. Return `undefined` when id not found */
  getUserNo404<Data>(id: number): Observable<User> {
    const url = `${this.usersURL}/?id=${id}`;
    return this.http.get<User[]>(url)
      .pipe(
        map(users => users[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} User id=${id}`);
        }),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }
 
  /** GET User by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersURL}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched User id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
 
  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty User array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersURL}/?name=${term}`).pipe(
      tap(_ => this.log(`found users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }
 
  //////// Save methods //////////
 
  /** POST: add a new User to the server */
  addUser (User: User): Observable<User> {
    return this.http.post<User>(this.usersURL, User, httpOptions).pipe(
      tap((User: User) => this.log(`added User w/ id=${User.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }
 
  /** DELETE: delete the User from the server */
  deleteUser (User: User | number): Observable<User> {
    const id = typeof User === 'number' ? User : User.id;
    const url = `${this.usersURL}/${id}`;
 
    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted User id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }
 
  /** PUT: update the User on the server */
  updateUser (User: User): Observable<any> {
    return this.http.put(this.usersURL, User, httpOptions).pipe(
      tap(_ => this.log(`updated User id=${User.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a UserService message with the MessageService */
    private log(message: string) {
      this.messageService.add('HeroService: ' + message);
    }
 

}