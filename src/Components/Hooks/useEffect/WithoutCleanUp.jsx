import React from 'react'
import { useEffect } from 'react'
const WithoutCleanUp = () => {
    useEffect(() => {

        const id = setInterval(() => {
            console.log("Running...");
        }, 1000);

        return () => {
            clearInterval(id);
            console.log("Interval Cleared");
        };

    }, []);
  return (
    <div>
      <h2>Without Cleanup</h2>
    </div>
  )
}

export default WithoutCleanUp
