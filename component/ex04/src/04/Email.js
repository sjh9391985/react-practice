import React from 'react';

export default function Email({no, firstName, lastName, email}) {

    return (
        <li key={no}>
            {`${ firstName } ${ lastName }`}
            <br/>
            { email }
        </li>
    )

}