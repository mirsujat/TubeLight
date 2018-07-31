import React, { Component, Fragment } from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";
import { muscles, exercises } from "./store";

class App extends Component {
  state = {
    exercises,
    category: "legs"
  };

  categorySelectHandler = category => {
    this.setState({ category });
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

  render() {
    const exercises = this.getExercisesByMuscle(),
      { category } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises category={category} exercises={exercises} />
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
