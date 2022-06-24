import React, { FunctionComponent, useContext } from 'react'
import { kaleidoscopeAppContext } from '../context/city-context';

const LandingPage : FunctionComponent<{}> = () => {
    const data = useContext(kaleidoscopeAppContext);
    return(
        <>
            {JSON.stringify(data)}
        </>
    )
}

export default LandingPage;