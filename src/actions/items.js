const Fill = (data) => {
    return {
        type: 'FILL_ITEMS',
        data
    }
}

const Add = (data) => {
    return {
        type: 'ADD_ITEM',
        data
    }
}

const Edit = (data) => {
    return {
        type: 'EDIT_ITEM',
        data
    }
}

const Delete = (id) => {
    return {
        type: 'DELETE_ITEM',
        data: id
    }
}

export default {
    Fill, Add, Edit, Delete
}