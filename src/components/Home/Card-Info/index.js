import Evolution from './Evolution'
import TE from './Type-Effect'
import Logo from './Logo'

const ci = ({text,number}) => {
    return (
        <>
        <h2>Card-Info</h2>
        <h5>{`${text} ${number}`}</h5>
        <p>
            <Evolution />
            <TE />
            <Logo />
        </p>
        </>
    )
}

export default ci;