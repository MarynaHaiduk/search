import './App.css';
import Attractions from "./components/attractions";
import BusStops from "./components/bus-stops";
import Parks from "./components/parks";
import Museums from "./components/museums";
import leftArrow from './icons/leftArrow.png';

function App() {

    const toggleDone = (id) => {
        console.log(id);
        // <BusStops/>;
    };

    return (
        <div className="main">
            <div className="container">
                <form>
                    <button><img src={leftArrow} width="16px" height="16px" alt="Logo" /></button>
                    <label htmlFor="location" className="form-label"></label>
                    <input id="location" type="text" className="form-control" value="Current Location"/>
                    <label htmlFor="destination" className="form-label"></label>
                    <input id="destination" type="text" className="form-control" placeholder="Choose destination"/>
                </form>
                <p>Add destination</p>

                <div className="d-grid gap-2 d-md-block">
                    <button type="button" className="btn btn-light" onClick={(id) => toggleDone()}>Bus Stops</button>
                    <button type="button" className="btn btn-light" onClick={(id) => toggleDone()}>Attractions</button>
                    <button type="button" className="btn btn-light" onClick={(id) => toggleDone()}>Parks</button>
                    <button type="button" className="btn btn-light" onClick={(id) => toggleDone()}>Museums</button>
                </div>
                <hr/>

                <BusStops/>
                <Attractions/>
                <Parks/>
                <Museums/>
            </div>
        </div>
    );
}

export default App;
