import "./App.css";
import Header from "./components/Header";
import FilterByType from "./components/FilterByType";
import ActivityGenerator from "./components/ActivityGenerator";
import Activity from "./components/Activity";
import { useState } from "react";

function App() {
  const [selectedType, setSelectedType] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <>
      <Header />
      <div className="center">
        <div className="half dotted-right">
          <FilterByType selectedType={selectedType} setSelectedType={setSelectedType} />
          <ActivityGenerator selectedType={selectedType} setActivity={setActivity} />
        </div>
        <div className="half">
          <Activity activity={activity} />
        </div>
      </div>
    </>
  );
}

export default App;
