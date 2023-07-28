import React, { useState } from "react";

const ConditionalRender = ()=>{

    const [status, setStatus] = useState(false);

    const handleStatus = ()=>{
        setStatus(!status)
    }


    return(
        <>
        <button onClick={handleStatus}>{status ? 'Hide' : 'Show'}</button>
        {
            status ? <div>loream jdkgyfyb ehosuf aioeyf akjsfgvksbfb </div> : <div> Data Hidden</div>
        }
        </>
    )
}

export default ConditionalRender;