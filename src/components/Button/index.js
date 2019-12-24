import React from 'react'

const Button = (props) => {
    return <button className={"mr-2 btn btn-" + props.theme} onClick={props.onClick}>
        {props.content}
    </button>
}

export default Button
