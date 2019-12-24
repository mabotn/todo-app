import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ItemService from '../../services/items'
import ItemActions from '../../actions/items'
import Input from '../../components/Input'
import Button from '../../components/Button'

const Edit = (props) => {
    const dispatcher = useDispatch()
    const item_id = useParams().id
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState(false)

    useEffect(() => {
        ItemService.Get(item_id).then((response) => {
            const item = response.data
            setTitle(item.title)
            setDescription(item.description)
            setStatus(item.is_completed)
        })
    }, [item_id])

    const titleChanged = (e) => {
        setTitle(e.target.value)
    }

    const descriptionChanged = (e) => {
        setDescription(e.target.value)
    }

    const statusChanged = (e) => {
        setStatus(e.target.checked)
    }

    const EditItem = async () => {
        const editedItem = (await ItemService.Edit({
            id: Date.now(),
            title: title,
            description: description,
            is_completed: status
        })).data

        dispatcher(ItemActions.Edit(editedItem))

        props.history.push('/')
    }

    const DeleteItem = async () => {
        props.history.push('/delete/' + item_id)
    }

    return <div>
        <Input label="Title" placeholder="eg. Buy Some Milk" value={title} onChange={titleChanged} />
        <Input label="Description" placeholder="eg. Go to retail store to buy some milk" value={description} onChange={descriptionChanged} />
        <div className="form-group">
            <input checked={status} onChange={statusChanged} type="checkbox" /> Is Completed?
        </div>
        <Button theme="primary" content="Edit" onClick={EditItem} />
        <Button theme="danger" content="Delete" onClick={DeleteItem} />
    </div>
}

export default Edit
