import busIcon from "../icons/Group13348.svg";
import busIcon2 from "../icons/Group13349.svg";
import busIconMain from "../icons/Component31–6.svg";

function BusStops() {
    const busStops = [
        {
            id: 1,
            name: "Port Authority",
            address: "8th Ave btwn 42nd St &  43rd St, in front of...",
            icon1: busIconMain,
            icon2: busIcon,
            buttons: [
                {
                    id: 1,
                    name: "Downtown Tour",
                    classStyle: "btn btn-light downtown-tour"
                },
                {
                    id: 2,
                    name: "Brooklyn Tour",
                    classStyle: "btn btn-light brooklyn-tour"
                },
                {
                    id: 3,
                    name: "Uptown & Harlem Tour",
                    classStyle: "btn btn-light uptown-harlem-tour"
                },
                {
                    id: 4,
                    name: "Night Tour",
                    classStyle: "btn btn-light night-tour"
                }]
        },
        {
            id: 2,
            name: "Times Square West",
            address: "46th St btwn 7th Ave & 8th Ave, off of 8th...",
            icon1: busIconMain,
            icon2: busIcon2,
            buttons: [
                {
                    id: 1,
                    name: "Downtown Tour",
                    classStyle: "btn btn-light downtown-tour"
                },
                {
                    id: 2,
                    name: "Uptown & Harlem Tour",
                    classStyle: "btn btn-light uptown-harlem-tour"
                }
            ]
        }
    ];

    return (
        <div>
            {
                busStops.map(el =>
                    <div>
                        <img src={el.icon1} alt="bus" />
                        <img src={el.icon2} alt="bus" />
                        <h3 className="title">{el.name}</h3>
                        <p>{el.address}</p>
                        {
                            el.buttons.map(item =>
                                <button className={item.classStyle}>{item.name}</button>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default BusStops;