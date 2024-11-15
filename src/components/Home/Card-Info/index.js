import Evolution from './Evolution'
import TE from './Type-Effect'
import Logo from './Logo'

const ci = ({text,number}) => {
    return (
        <>
        <h2>Card-Info</h2>
        <h5>{`${text} ${number}`}</h5>
        <p>
            <Evolution text="adding props to Evolution" number={1}/>
            <TE text="adding props to Type-Effect" number={2}/>
            <Logo text="adding props to Logo Card-Info" number={3}/>
        </p>
        </>
    );
};

export default ci;