import HttpClient from 'axios'

const GetAll = () => {
    return HttpClient.get('http://127.0.0.1:3000/items')
}

const Get = (id) => {
    return HttpClient.get('http://127.0.0.1:3000/items/' + id)
}

const Add = (item) => {
    return HttpClient.post('http://127.0.0.1:3000/items', item)
}

const Edit = (item) => {
    return HttpClient.put('http://127.0.0.1:3000/items/' + item.id, item)
}

const Delete = (id) => {
    return HttpClient.delete('http://127.0.0.1:3000/items/' + id)
}

export default {
    GetAll, Get, Add, Edit, Delete
}
