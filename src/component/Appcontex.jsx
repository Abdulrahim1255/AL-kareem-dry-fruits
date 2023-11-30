import React from 'react'
import { createContext } from 'react'
export const name = createContext()
const Appcontex = ({ childern }) => {
    return (


        <div>


            <name.Provider value='hhhh'>
                {childern}
            </name.Provider>
            Appcontex</div>
    )
}

export { Appcontex } 