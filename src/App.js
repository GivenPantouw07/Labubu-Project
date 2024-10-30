import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header text="header using pull request" />
      <Header text="testing merge" />
      <Home />
      <Footer />
    </>
  );
};

export default App;
