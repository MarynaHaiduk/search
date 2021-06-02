function BusStops() {

    const busStops = [
        {
            id: 1,
            name: "Port Authority",
            address: "8th Ave btwn 42nd St &  43rd St, in front of...",
            buttons: ["Downtown Tour", "Brooklyn Tour", "Uptown & Harlem Tour", "Night Tour"]
        },
        {
            id: 2,
            name: "Times Square West",
            address: "46th St btwn 7th Ave & 8th Ave, off of 8th",
            buttons: ["Downtown Tour", "Uptown & Harlem Tour"]
        }
    ];

    return (
        <div>
            {
                busStops.map(el =>
                    <div>
                        <h3>{el.name}</h3>
                        <p>{el.address}</p>
                        {
                            el.buttons.map(item => <button className="btn btn-light">{item}</button>)
                        }
                    </div>
                )
            }
        </div>
    );
}

export default BusStops;