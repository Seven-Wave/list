import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Menu.module.css'

export default function Menu(props) {
    const cls = [classes.Menu]

    if (props.isOpen) {
        cls.push(classes.open)
    }

    return (
        <>
            <div className={cls.join(' ')}>
                <ul>
                    <li><a href="">Link 1</a></li>
                    <li><a href="">Link 2</a></li>
                    <li><a href="">Link 3</a></li>
                </ul>
            </div>
            {props.isOpen ? 
                <Backdrop 
                    isOpen={props.isOpen}
                    onClick={props.onClose}
                /> 
                : null}
        </>
    )
}
