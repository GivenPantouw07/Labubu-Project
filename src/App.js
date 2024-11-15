import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header text="header using pull request" />
      <Home />
      <Footer text="footer using props" />
    </>
  );
};

export default App;
