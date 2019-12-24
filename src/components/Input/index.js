import React from 'react'

const Input = (props) => {
    return <div className="form-group">
        <label>{props.label}</label>
        <input className="form-control"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />
    </div>
}

export default Input
