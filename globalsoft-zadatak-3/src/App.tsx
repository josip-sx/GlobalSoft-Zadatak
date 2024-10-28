import React from "react";
import { FunctionComponent } from "react";

import { TaskOneComponent } from "./components/TaskOne";
import { TaskTwoComponent } from "./components/TaskTwo";
import { TaskThreeComponent } from "./components/TaskThree";
import { TaskFourComponent } from "./components/TaskFour";
import { TaskFiveComponent } from "./components/TaskFive";

export const App: FunctionComponent = () => {
  return(
    <div className="app-container">
      <TaskOneComponent/>
      <TaskTwoComponent/>
      <TaskThreeComponent/>
      <TaskFourComponent/>
      <TaskFiveComponent/>
    </div>
  );
}

