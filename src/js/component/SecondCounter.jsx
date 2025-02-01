import React, { useEffect } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


function SecondCounter() {
    const [counter, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => setCount(counter + 1), 1000);
        return () => clearInterval(intervalId);
    }, [counter])


    return (
        <div class="row">
            <div class="col-12 col-sd-12">
                <div class="alert alert-success mt-3" role="alert">
                    <p>Contador para Nef {counter}</p>
                </div>
            </div>
        </div>
    );
};

export default SecondCounter;
