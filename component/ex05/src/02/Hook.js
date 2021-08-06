import React, {useState, useRef, useEffect} from 'react';

export default function Hook({color}) {

    const [boxColor, setBoxColor] = useState(color);
    const h4Ref = useRef(null);


    console.log(boxColor, color);

    return (
        <h3
            style={{
                width: 300,
                height: 50,
                backgroundColor: color
            }}
            ref={h4Ref}/>
    )

}