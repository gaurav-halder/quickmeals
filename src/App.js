import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
    
  return (
    <div className="App">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Body searchText={searchText} />
    </div>
  );
}

export default App;
