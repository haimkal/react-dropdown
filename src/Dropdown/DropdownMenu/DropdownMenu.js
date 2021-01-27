import React, { useContext } from 'react'
import './DropdownItem/DropdownItem'
import './DropdownMenu.css'
import { Context } from '../Dropdown'
export default function DropdownMenu(props) {

    const context = useContext(Context);

    return (
        <>
            {context.isShown && <ul className='dropdownMenu'>
                {props.children}
            </ul>}
        </>
    )
}
