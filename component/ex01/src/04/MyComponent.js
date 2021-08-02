import React, { Fragment } from 'react'
import {PropTypes} from 'prop-types'

export default function MyComponent ({props01, props02,props03, props04,props05, props06, props07, props08, props09})  {
    return (
        <Fragment>
            <h2>Property Validation</h2>
            <span>props01: {props01 ? props01 : '---not set'} </span>
            <br/>
            <span>props02: {props02 ? props02 : '---not set'} </span>
            <br/>
            <span>props03: {props03 ? props03 ? 'true': 'false' : '---not set'} </span>
            <br/>
            <span>props04: {props04 ? props04.no : '---not set'} </span>
            <br/>
            <span>props05: {props05 ? props05.map((e, i)=><h3 key={i}>{e}</h3>) : '---not set'} </span>
            <br/>
            <span>props06: {props06 ? props06() : '---not set'} </span>
            <br/>
            <span>props07: {props07 ? props07 : '---not set'} </span>
            <br/>
            <span>props08: {props08 ? props08.map((e, i)=> e? <h3 key={i}>{'true'}{' '}</h3> : <h3 key={i}>{'false'}{' '}</h3> ) : '---not set'} </span>
            <br/>
            <span>
                props09:{ 
                        props09 ? 
                            <div>
                                <h3>{props09.no}</h3>
                                <h3>{props09.name}</h3>
                                <h3>{props09.email}</h3>
                            </div>
                            :
                            '---not set'
                        }
            </span>
        </Fragment>
    );
}

MyComponent.propTypes = {
    // [Built-in propTypes Validator: primitives]
    props01: PropTypes.string,
    props02: PropTypes.number.isRequired, //isRequired는 강제로서 꼭 넣어줘야 함.
    props03: PropTypes.bool.isRequired,
    props04: PropTypes.object.isRequired,
    props05: PropTypes.array.isRequired,
    props06: PropTypes.func.isRequired,

    // [Built-in propTypes Validator: Combined Promitives]
    props07: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    props08: PropTypes.arrayOf(PropTypes.bool).isRequired,
    props09: PropTypes.shape({
        no:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        eamil:PropTypes.string.isRequired
    }).isRequired
}

// Default Value
MyComponent.defaultProps ={
    props01: '기본값',
    props02: 123,
    props03: true,
    props04: null,
    props05: [],
    props06: () => { }
}