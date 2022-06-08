import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Route from './components/Route';
import HomePage from './components/HomePage';
import './index.css'

const App = () => {
    
    return (
        <div>
            <Route path="/">
                <HomePage/>
            </Route>
        </div>
        
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))