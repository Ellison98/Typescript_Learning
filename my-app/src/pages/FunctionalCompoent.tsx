import { useState } from "react";

const FunctionalComponent = () => {

    const [cnt, setCnt] = useState(0);
    const [cnt2, setCnt2] = useState(0);

    const handleClik = () => {
        setCnt(cnt + 1);
        setCnt2(cnt2 + 1);
    }

    return (
        <div>
            <h1>Functional Component</h1>
            <button onClick={handleClik}>{cnt}</button>
            <button>{cnt2}</button>
        </div>
    )
};

export default FunctionalComponent;