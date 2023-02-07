import "./styles.css";
import Data from "./data.json";
import { useState } from "react";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {Data.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p className="box-title">{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
