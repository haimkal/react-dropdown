import React from 'react'
import './DropdownItem.css'

export default function DropdownItem(props) {
    console.log(props.children)
    return (
        <li className="DropdownItem">
            <a href={props.route}>
            {props.children}
                
            </a>
            
        </li>
    );
}
