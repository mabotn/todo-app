import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ItemService from '../../services/items'
import ItemActions from '../../actions/items'
import List from '../../components/List'

const Home = () => {
    const dispatcher = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        ItemService.GetAll().then((response) => {
            dispatcher(ItemActions.Fill(response.data))
        })
    }, [])

    return <div>
        <List items={state} />
    </div>
}

export default Home
