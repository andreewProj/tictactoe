import React, {Component} from 'react';
// import {BrowserRouter,Route,Switch} from 'react-router-dom';

import ButtonAppBar from "./templates/ButtonAppBar";
import Board from "./templates/Board";
import Square from "./templates/Square";
import Game from "./templates/Game";
// import InfoPage from "./pages/InfoPage";
// import RegPage from "./pages/RegPage";
// import PrivatePage from "./pages/PrivatePage";
// import CharactersPage from "./pages/CharactersPage";
// import HeroPage from "./pages/HeroPage";

// вызвать homepage

class App extends Component {

    render() {


        return (
            <div>
                <ButtonAppBar></ButtonAppBar>
                <br/>
                <Game>
                    <Board>
                        <Square></Square>
                    </Board>
                </Game>


            </div>

        );
    }
}

export default App;
