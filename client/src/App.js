import { Fragment } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
