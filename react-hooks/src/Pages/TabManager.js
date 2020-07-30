import React from "react";
import Tabs from "../Components/Tabs/Tabs";

export default function TabManager() {
  return (
    <div className="App">
      <h1>Tab Component Demo</h1>
      <h2>Start adding tabs to see some magic happen!</h2>
      <Tabs>
        <div title="Tab-1">
          Ut condimentum, ex sit amet rutrum ultrices, nisi velit condimentum
          mi, et sagittis turpis ligula ut neque. Nunc ut arcu velit. Sed
          suscipit nisl est, ut scelerisque elit pretium et.{" "}
        </div>
        <div title="Tab-2">
          Phasellus vel nisi lectus. Curabitur ac efficitur quam. Aliquam
          faucibus, nibh non auctor auctor, lectus leo cursus massa, ac ornare
          dolor ante eu libero.{" "}
        </div>
        <div title="Tab-3">
          Aliquam erat volutpat. Sed id pulvinar magna. Aenean scelerisque ex
          vitae faucibus faucibus. Proin rutrum est eget odio faucibus tempor.
          Nulla ut tellus non urna congue finibus.{" "}
        </div>
      </Tabs>
    </div>
  );
}
