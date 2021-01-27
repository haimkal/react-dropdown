import React, { useContext } from 'react'
import './DropdownButton.css'
import {useState} from 'react';
import {Context} from '../Dropdown'

export default function DropdownButton() {
    const context = useContext(Context);

    function showMenu(){
        context.setIsShown(!context.isShown);
        console.log('changed', context.isShown)
    }

    function closeMenu() {
        context.setIsShown(false);
        console.log('closed', context.isShown) 
    }
    
    return (
        <button onClick={showMenu} onBlur={closeMenu} className ="button" >
            Button
        </button>
    )
}
