import React, { useContext } from 'react'
import { counterContext } from './context/context'

function Last_component() {
    const value = useContext(counterContext);

    return (
        <>
            {value.count}
        </>
    )
}

export default Last_component