import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  getExercisesByMuscle() {
    const initExercise = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercise)
    );
  }

  categorySelectHandler = category => {
    this.setState({ category });
  };

  exerciesSelectHandler = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  exerciseCreateHandler = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise]
    }));
  };

  exerciseDeleteHandler = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));
  };

  selectEditHandler = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };

  exerciesEditHandler = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise, editMode } = this.state;

    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.exerciseCreateHandler}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          muscles={muscles}
          onSelect={this.exerciesSelectHandler}
          onDelete={this.exerciseDeleteHandler}
          onSelectEdit={this.selectEditHandler}
          editMode={editMode}
          onEdit={this.exerciesEditHandler}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.categorySelectHandler}
        />
      </Fragment>
    );
  }
}

export default App;
