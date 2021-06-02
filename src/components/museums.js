export default function Museums() {
    const addresses = [
        {
            id: 1,
            name: "Metropolitan museum",
            address: "12 E 23rd St, New York"
        },
        {
            id: 2,
            name: "Metropolitan museum",
            address: "12 E 23rd St, New York"
        }
    ];

    return (
        <div>
            {
                addresses.map(el =>
                    <div>
                        <h3>{el.name}</h3>
                        <p>{el.address}</p>
                    </div>
                )
            }
        </div>
    );
}