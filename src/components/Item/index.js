import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return <Link to={"/edit/" + props.details.id} className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{props.details.title}</h5>
            <small>{Moment(props.details.id, 'x').fromNow()}</small>
        </div>
        <p className="mb-1">{props.details.description}</p>
        {props.details.is_completed && <span className="badge badge-success">Done</span>}
        {!props.details.is_completed && <span className="badge badge-warning">Todo</span>}
    </Link>
}

export default Item
