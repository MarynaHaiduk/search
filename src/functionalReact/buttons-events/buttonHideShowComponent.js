import {useState} from "react";

const MyComponent = () => {
    return (
        <div>
            <div>Hide component</div>
        </div>
    )
};

const HooksDemo = () => {
    const [MyComponentInfo, setMyComponentInfo] = useVisibilityToggler(<MyComponent/>, true);

    return (
        <div>
            <button onClick={setMyComponentInfo}></button>
            {MyComponentInfo}
        </div>
    )
}

const useVisibilityToggler = (component, visibility = false) =>{
    const [visible, setVisibility] =useState(() => visibility);
    return [
        visible ? component : null, () => setVisibility(v => !v)
    ]
}

export default HooksDemo;

