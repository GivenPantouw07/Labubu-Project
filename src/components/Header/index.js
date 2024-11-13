import Generations from "./Generations";
import Logo from "./Logo";


const header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <p>
        <Generations />
        <Logo />
      </p>
    </>
  );
};

export default header;