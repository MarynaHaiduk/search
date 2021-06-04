import mapIcon from "../icons/MapPin.svg";

export default function Museums() {

    const addresses = [
        {
            id: 1,
            name: "Metropolitan Museum",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        },
        {
            id: 2,
            name: "Brooklyn Museum",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        }
    ];

    return (
        <div className="container">
            {
                addresses.map(el =>
                    <div className="flex-container">

                        <div className="item-1">
                            <img src={el.icon} alt="icon location" />
                        </div>

                        <div className="item-2">
                            <h3 className="title">{el.name}</h3>
                            <p className="address">{el.address}</p>
                        </div>

                    </div>)
            }
        </div>
    );
}