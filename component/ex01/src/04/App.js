import React from 'react';
import MyComponent from './MyComponent';

export default function ()  {
        return (
            <div id='App'>
                <MyComponent 
                    // props01={ 'string' } : Not Required, Default Value
                    props02= { 10 }
                    props03= { true }
                    props04= { { no:10 } }
                    props05={ [10,20,30,40] }
                    props06= { () => { return  'func'} }
                    props07={ 10 }
                    props08={ [true, false, false] }
                    props09={ {no:10, name:"둘리", email: "dooly@gmail.com"} }
                    />
            </div>    
        );
}