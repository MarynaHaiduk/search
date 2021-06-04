import './App.css';
import {useState} from 'react';

import Attractions from "./components/attractions";
import BusStops from "./components/bus-stops";
import Parks from "./components/parks";
import Museums from "./components/museums";

import Arrow from './icons/Arrow.svg';
import Circle from "./icons/stop-circle.svg";
import PlusCircle from "./icons/plus-circle.svg";
import ArrowDownUp from "./icons/arrow-down-up.svg";

function App() {
    const displayComponents = [];
    const [addComponent, setAddComponent] = useState(displayComponents);

    const busStop = (id) => {
        setAddComponent([
            ...addComponent,
            <BusStops/>
        ])
    };

    const attractions = (id) => {
        setAddComponent([
            ...addComponent,
            <Attractions/>
        ])
    };

    const parks = (id) => {
        setAddComponent([
            ...addComponent,
            <Parks/>
        ])
    };

    const museums = (id) => {
        setAddComponent([
            ...addComponent,
            <Museums/>
        ])
    };

    return (
        <div className="main">
            <form>
                <div className="container">
                    <div className="flex-container">
                        <div className="item-1">
                            <img src={Arrow} alt="arrow" />
                        </div>
                        <div className="item-1">
                            <img src={Circle} alt="circle" />
                        </div>
                        <div className="item-2">
                            <label htmlFor="location" className="form-label"></label>
                            <input id="location" type="text" className="form-control" value="Current Location"/>
                            <label htmlFor="destination" className="form-label"></label>
                            <input id="destination" type="text" className="form-control"
                                   placeholder="Choose destination"/>
                        </div>
                        <div className="item-1">
                            <img text-align="right" src={ArrowDownUp} alt="arrow" height="14px" weight="14px"/>
                        </div>
                    </div>
                </div>
            </form>

            <div className="container">
                <div className="flex-container">
                    <div className="item-1">
                    </div>
                    <div className="item-1">
                        <img src={PlusCircle} alt="arrow" />
                    </div>
                    <div className="item-2">
                        <p className="destination">Add destination</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="flex-container">
                    <div className="item-4">
                        <button type="button"
                                className="search-btn"
                                onClick={(id) => busStop()}>Bus Stops
                        </button>
                        <button type="button"
                                className="search-btn"
                                onClick={(id) => attractions()}>Attractions
                        </button>
                        <button type="button"
                                className="search-btn"
                                onClick={(id) => parks()}>Parks
                        </button>
                        <button type="button"
                                className="search-btn"
                                onClick={(id) => museums()}>Museums
                        </button>
                    </div>
                </div>
                <hr/>
            </div>

            <div id="search">
                {addComponent}
            </div>

        </div>
    );
}

export default App;
