import { Injectable, signal } from '@angular/core';
import { Exercise } from '../models/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises = signal<Exercise[]>([
    {
    name: 'Jog',
    duration: 30,
  },
  {
    name: 'Push-Ups',
    duration: 1
  }
  ]);
  getExercises() {
    return this.exercises.asReadonly()
  }

  addExercise(ex: Exercise) {
    this.exercises.update(e => [...e, ex])
  }

  removeExercise(n: string) {
    this.exercises.update(l => l.filter(e => e.name !== n))
  }
}


