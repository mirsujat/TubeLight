import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByMuscle() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
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

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category, exercise } = this.state;

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
          onSelect={this.exerciesSelectHandler}
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
