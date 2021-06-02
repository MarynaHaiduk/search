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
        <div>
            {
                addresses.map(el =>
                    <div className="search-data">
                        <img src={el.icon} alt="icon location" />
                        <h3 className="title" ssN>{el.name}</h3>
                        <p>{el.address}</p>
                    </div>
                )
            }
        </div>
    );
}