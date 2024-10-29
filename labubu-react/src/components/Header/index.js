import Generations from "./Generations";
import Logo from "./Logo";

const header = () => {
    return (
      <>
        <h1>Header</h1>
        <p>
            <Generations />
            <Logo />
        </p>
      </>
    );
}

export default header;