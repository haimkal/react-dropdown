import React, { createContext } from 'react'
import { useState } from 'react';
export const Context = createContext();
export default function Dropdown(props) {
    const [isShown, setIsShown] = useState(false);

    return (
        <Context.Provider value={{
            isShown,
            setIsShown
        }}>
            <div className="dropdown">
                {props.children}

            </div>
        </Context.Provider>
    )
}
