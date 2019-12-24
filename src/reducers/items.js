const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'FILL_ITEMS':
            return action.data

        case 'ADD_ITEM':
            return [action.data, ...state]

        case 'EDIT_ITEM':
            return state.map(item => item.id === action.data.id ? action.data : item)

        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.data)

        default:
            return state
    }
}

export default Reducer
