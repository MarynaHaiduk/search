import {useState} from "react";

export default function ButtonsShowComponent() {
    const professions = ["police", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("");

return (
    <div>
        <div>
            {professions.map(profession => (
                <div>
                    <button
                        key={profession}
                        onClick={() => setMyProfession(profession)}

                    >{profession}
                    </button>

                    <p>{profession}</p>
                </div>
            ))}
        </div>
        <div>
            <p>{myProfession}</p>
        </div>
    </div>
);
}