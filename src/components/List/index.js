import React from 'react'
import Item from '../Item'

const List = (props) => {
    return <div className="list-group mb-4">
        {props.items.map((item) => <Item key={item.id} details={item} />)}
    </div>
}

export default List
