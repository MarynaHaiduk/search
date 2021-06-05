import mapIcon from "../icons/Component15–4.svg";

export default function Attractions() {

    const addresses = [
        {
            id: 1,
            name: "Times Square",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        },
        {
            id: 2,
            name: "Times Square Building",
            address: "12 E 23rd St, New York,",
            icon: mapIcon
        }
    ];

    return (
        <>
            {
                addresses.map(el =>
                    <div className="flex-container">
                        <div className="item-1">
                            <img src={el.icon} alt="icon location"/>
                        </div>
                        <div className="item-2">
                            <h3 className="title">{el.name}</h3>
                            <p className="address">{el.address}</p>
                            <hr/>
                        </div>
                    </div>)
            }
        </>
    );
}