import './App.css';

import StartMenu from "./components/Menu/MenuContainer";
import {BrowserRouter,Route, Switch, NavLink} from "react-router-dom";
import Board from "./components/Board/BoardContainer";

function App() {
    function handlerChange(e,ac, ca) {
        const currentText = e.target.value
        ac(currentText)
        if (e.isTrusted && !currentText.trim()) {
            ca(true)
        } else {
            ca(false)
        }
    }

    return <div className={'content'}>
        <BrowserRouter>
            <div className={'home'}>
                <NavLink to = '/'>
                <i className="material-icons">home</i>
                </NavLink>
            </div>
            <Switch>
                <Route path = '/b/:id?' render = {()=> <Board handlerChange = {handlerChange}/>}/>
                <Route path = '/' render = {()=><StartMenu handlerChange={handlerChange}/>}/>
            </Switch>

        </BrowserRouter>
    </div>
}

export default App;
