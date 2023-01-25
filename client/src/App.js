import { Fragment } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
