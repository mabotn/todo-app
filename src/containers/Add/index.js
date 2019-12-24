import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ItemService from '../../services/items'
import ItemActions from '../../actions/items'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Add = (props) => {
    const dispatcher = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const titleChanged = (e) => {
        setTitle(e.target.value)
    }

    const descriptionChanged = (e) => {
        setDescription(e.target.value)
    }

    const addNewItem = async () => {
        const newItem = (await ItemService.Add({
            id: Date.now(),
            title: title,
            description: description,
            is_completed: false
        })).data

        dispatcher(ItemActions.Add(newItem))

        props.history.push('/')
    }

    return <div>
        <Input label="Title" placeholder="eg. Buy Some Milk" value={title} onChange={titleChanged} />
        <Input label="Description" placeholder="eg. Go to retail store to buy some milk" value={description} onChange={descriptionChanged} />
        <Button theme="primary" content="Add" onClick={addNewItem} />
    </div>
}

export default Add
