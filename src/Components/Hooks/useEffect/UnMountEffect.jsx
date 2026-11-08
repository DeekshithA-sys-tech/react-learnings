import { useState, useEffect } from "react";

function UnMountEffect() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Effect:", count);

        return () => {
            console.log("Cleanup:", count);
        };

    }, [count]);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

export default UnMountEffect;