import Generations from "./Generations";
import Logo from "./Logo";


const header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
      <p>
        <Generations />
        <Logo text="Logo Header using props"/>
      </p>
    </>
  );
};

export default header;