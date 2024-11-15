import Search from "./Search"
import Ci from "./Card-Info" 

const home = () => {
    return (
        <>
        <h1>Home</h1>
        <p>
            <Search text="adding props in Search" number={1}/>
            <Ci text="adding props in Card-Info" number={2}/>
        </p>
        </>
    );
};

export default home;