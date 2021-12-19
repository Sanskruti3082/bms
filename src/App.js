import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Components
import HomePage from "./pages/Home.page"

function App() {
  return (
    <>

      <DefaultHOC path="/" exact component={HomePage}/>

    </>
  );
}

export default App;
