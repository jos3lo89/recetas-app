import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
} from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  complete: boolean;
}

export type TaskCreate = Omit<Task, 'id'>;

const PATH = 'task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);

  getTasks = toSignal(
    collectionData(this._collection, { idField: 'id' }) as Observable<Task[]>,
    {
      initialValue: [],
    }
  );

  //   create(task: TaskCreate) {
  create() {
    const task: TaskCreate = {
      title: 'wadafa',
      complete: false,
    };
    return addDoc(this._collection, task);
  }

  gettareas() {
    const tareas = this.getTasks();
    console.log(tareas);
  }
}
