
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
const App = () => {
    return(
        <div>
            <h1>Adopt Me</h1>
            <Router>
                <Switch>
                    <Route path='/details/:id'>
                        <Details></Details>
                    </Route>

                    <Route path='/'>
                        <SearchParams></SearchParams>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

ReactDOM.render(
    <StrictMode>
        <App></App>
    </StrictMode>
    , document.getElementById('root'))
