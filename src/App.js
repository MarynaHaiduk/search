import './App.css';
import { useState } from 'react';
import Attractions from "./components/attractions";
import BusStops from "./components/bus-stops";
import Parks from "./components/parks";
import Museums from "./components/museums";
import Arrow from './icons/Arrow.svg';
import BusStop from "./components/bus-stops";

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
            <div className="container">
                <form>
                    <label htmlFor="location" className="form-label"><img src={Arrow}/></label>
                    <input id="location" type="text" className="form-control" value="Current Location"/>
                    <label htmlFor="destination" className="form-label"></label>
                    <input id="destination" type="text" className="form-control" placeholder="Choose destination"/>
                </form>
                <p>Add destination</p>

                <div className="d-grid gap-2 d-md-block">
                    <button type="button" className="btn btn-light" onClick={(id) => busStop()}>Bus Stops</button>
                    <button type="button" className="btn btn-light" onClick={(id) => attractions()}>Attractions</button>
                    <button type="button" className="btn btn-light" onClick={(id) => parks()}>Parks</button>
                    <button type="button" className="btn btn-light" onClick={(id) => museums()}>Museums</button>
                </div>

                <div id="bus">
                    {addComponent}
                </div>

            </div>
        </div>
    );
}

export default App;
