import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from '../Home'
import Add from '../Add'
import Edit from '../Edit'
import Delete from '../Delete'

const App = () => {
    return <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link className="navbar-brand" to="/">Todo App</Link>

                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Add New Item</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/edit/:id" component={Edit} />
                <Route exact path="/delete/:id" component={Delete} />
            </Switch>
        </div>
    </BrowserRouter>
}

export default App
