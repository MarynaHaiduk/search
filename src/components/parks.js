import mapIcon from "../icons/MapPin.svg";

export default function Parks() {

    const parks = [
        {
            id: 1,
            name: "Central Park",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        },
        {
            id: 2,
            name: "Battery Park",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        }
    ];

    return (
        <div>
            {
                parks.map(el =>
                    <div className="flex-container">

                        <div className="item-1">
                            <img src={el.icon} alt="icon map"/>
                        </div>

                        <div className="item-2">
                            <h3 className="title">{el.name}</h3>
                            <p className="address">{el.address}</p>
                            <hr/>
                        </div>

                    </div>)
            }
        </div>
    );
}