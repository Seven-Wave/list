import React from 'react'
import classes from './Backdrop.module.css'


export default function Backdrop(props) {
    const cls = [classes.Backdrop]

    if (props.isOpen) {
        cls.push(classes.open)
    }

    return (
        <div className={cls.join(' ')} onClick={props.onClick} />
    )
}
